import ExpoModulesCore
import TinkLink

public class TinkLinkNativeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("TinkLinkNative")

    Function("startSDK") { (clientID: String, redirectURI: String) -> Void in 
      let sdk = TinkLinkSDK()
      sdk.startSDK(clientID: clientID, redirectURI: redirectURI) { result in 
        self.sendEvent("succeed", [
          "authCode": result
        ])
      }
    }

    Events("succeed")
  }
}

@objc(TinkLinkSDK)
class TinkLinkSDK: UIViewController {

  override func viewDidLoad() {
      super.viewDidLoad()
  }

  
  @objc
  func startSDK(clientID: String, redirectURI: String, completion: @escaping (String)->()) {
      DispatchQueue.main.async {
          let configuration = Configuration(clientID: clientID, redirectURI: redirectURI, baseDomain: .eu)
          let viewController = Tink.Transactions.connectAccountsForOneTimeAccess(configuration: configuration, market: Market("FR")) { result in
            switch (result) {
              case .success(let data):
                completion(data.code!.rawValue)
                UIApplication.shared.windows.first?.rootViewController?.dismiss(animated: true)
              case .failure(let error):
                completion("Failed")
            }
          }
          UIApplication.shared.windows.first?.rootViewController?.present(viewController, animated: true)
    }
  }
}
