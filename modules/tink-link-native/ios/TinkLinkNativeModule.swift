import ExpoModulesCore
import TinkLink

public class TinkLinkNativeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("TinkLinkNative")

    Function("startSDK") {
      let sdk = TinkLinkSDK()
      sdk.startSDK()
    }
  }
}

@objc(TinkLinkSDK)
class TinkLinkSDK: UIViewController {

  override func viewDidLoad() {
      super.viewDidLoad()
  }

  
  @objc
  func startSDK() {
    DispatchQueue.main.async {
        let configuration = Configuration(clientID: "94da0d0f91184c3fa0d8de8beee4d84e", redirectURI: "https://console.tink.com/callback", baseDomain: .eu)
        let viewController = Tink.Transactions.connectAccountsForOneTimeAccess(configuration: configuration, market: Market("FR")) { result in
        }
        UIApplication.shared.windows.first?.rootViewController?.present(viewController, animated: true)
    }
  }
}
