import ExpoModulesCore
import TinkLink

public class TinkLinkNativeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("TinkLinkNative")

    Function("startSDK") { (clientID: String, redirectURI: String) -> Void in 
      let sdk = TinkLinkSDK()
      sdk.startSDK(clientID: clientID, redirectURI: redirectURI)
    }
  }
}

@objc(TinkLinkSDK)
class TinkLinkSDK: UIViewController {

  override func viewDidLoad() {
      super.viewDidLoad()
  }

  
  @objc
  func startSDK(clientID: String, redirectURI: String) {
    DispatchQueue.main.async {
        let configuration = Configuration(clientID: clientID, redirectURI: redirectURI, baseDomain: .eu)
        let viewController = Tink.Transactions.connectAccountsForOneTimeAccess(configuration: configuration, market: Market("FR")) { result in
        }
        UIApplication.shared.windows.first?.rootViewController?.present(viewController, animated: true)
    }
  }
}
