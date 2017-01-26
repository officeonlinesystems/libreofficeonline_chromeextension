function interceptRequest(request)
{
    if (request && request.url) {
        if (request.type == "main_frame") {
            if (
                 ( request.url.indexOf("docs.google.com") == -1 )
                   && (request.url.indexOf("offidocs.com") == -1)
                ) 
            {
                var userxxx = Math.floor(Math.random() * 2000000);
  				var filexxx = Math.floor(Math.random() * 2000000);
  				var origurl = "https://www.offidocs.com/editextension.php?username=??&filename=yy&url=" + request.url+"&ext=yes";
  				var urlxx = origurl.replace("??", userxxx).replace("yy", filexxx);
                return {
                    redirectUrl: urlxx
                };
            }
        }
    }
}

chrome.webRequest.onBeforeRequest.addListener(
        interceptRequest,
        { urls: ["*://*/*.doc", "*://*/*.docx",
                "*://*/*.ppt", "*://*/*.pptx",
                "*://*/*.xls", "*://*/*.xlsx",
                "*://*/*.odt", "*://*/*.ods",
                "*://*/*.odp", "*://*/*.rtf",
                "*://*/*.csv", "*://*/*.txt"
                ]},
        ['blocking']
);

