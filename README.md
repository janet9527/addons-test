# steps
1.Get my test Firefox plugin source code(https://github.com/janet9527/addons-test)

2.Use Firefox to load and debug this plugin

3.Open this website(https://www.baidu.com/)

4.If the plugin runs successfully, we will see the image processed by OpenCV.js at the bottom of the page.

# desc
I'm currently working on a Firefox plugin.This plugin uses OpenCV.js.When I run this plugin, the following error occurs:

**InvalidStateError: CanvasRenderingContext2D.putImageData: Failed to extract Uint8ClampedArray from ImageData (security check failed?)**

This makes me very puzzled, because Firefox directly accesses the official website of OpenCV without an error, but using OpenCV.js through a plugin reports an error.
~~There is no issue in the firefox ESR102 release~~,But it will fail when I run it in my Firefox 118、Firefox 117.

-----------------------------------------------------------
Latest corrections :

**In the firefox ESR102 release The processed picture is not displayed in the bottom And the console did not report an error.**

So this issue is also present in the ESR102 release.

![](https://github.com/janet9527/addons-test/blob/main/img/esr102fail.png?raw=true)

-----------------------------------------------------------

More details see this post：

https://discourse.mozilla.org/t/invalidstateerror-canvasrenderingcontext2d-putimagedata-failed-to-extract-uint8clampedarray-from-imagedata-security-check-failed/122595

Firefox plugin use opencv.js error:
![err](https://github.com/janet9527/addons-test/blob/main/img/err.png?raw=true)

Use Firefox to visit the OpenCV website (success):
![](https://github.com/janet9527/addons-test/blob/main/img/visitOpencvSuccess.jpeg?raw=true)

Use chrome run the plugin(success):
![](https://github.com/janet9527/addons-test/blob/main/img/chromPluginSUccess.png?raw=true)

# post

https://discourse.mozilla.org/t/invalidstateerror-canvasrenderingcontext2d-putimagedata-failed-to-extract-uint8clampedarray-from-imagedata-security-check-failed/122595/4

https://bugzilla.mozilla.org/show_bug.cgi?id=1853273
