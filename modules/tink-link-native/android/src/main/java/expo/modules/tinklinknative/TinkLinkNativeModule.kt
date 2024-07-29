package expo.modules.tinklinknative

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class TinkLinkNativeModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("TinkLinkNative")

    Function("startSDK") {}
  }
}
