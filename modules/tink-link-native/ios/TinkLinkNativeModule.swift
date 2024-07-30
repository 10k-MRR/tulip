import ExpoModulesCore
import TinkLink

public class TinkLinkNativeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("TinkLinkNative")

    Function("connectAccountsForOneTimeAccess") { (clientID: String, redirectURI: String) -> Void in 
      let sdk = TinkLinkSDK()
      sdk.connectAccountsForOneTimeAccess(clientID: clientID, redirectURI: redirectURI) { result in 
        self.sendEvent("CONNECT_ACCOUNTS_FOR_ONE_TIME_ACCESS", [
          "authCode": result
        ])
      }
    }

    Events("CONNECT_ACCOUNTS_FOR_ONE_TIME_ACCESS")
  }
}

@objc(TinkLinkSDK)
class TinkLinkSDK: UIViewController {

  override func viewDidLoad() {
      super.viewDidLoad()
  }

  
  @objc
  func connectAccountsForOneTimeAccess(clientID: String, redirectURI: String, completion: @escaping (String)->()) {
      DispatchQueue.main.async {
          let configuration = Configuration(clientID: clientID, redirectURI: redirectURI, baseDomain: .eu)
          let viewController = Tink.Transactions.connectAccountsForOneTimeAccess(configuration: configuration, market: Market("FR")) { result in
            switch (result) {
              case .success(let data):
                completion(data.code!.rawValue)
                UIApplication.shared.windows.first?.rootViewController?.dismiss(animated: true)
              case .failure(_):
                completion("")
            }
          }
          UIApplication.shared.windows.first?.rootViewController?.present(viewController, animated: true)
    }
  }
}
