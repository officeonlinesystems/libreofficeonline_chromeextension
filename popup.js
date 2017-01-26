(function(){
  var apps_urls = {
    doc: "https://www.offidocs.com/createe-doc.php?username=??&filename=yy",
    sheet: "https://www.offidocs.com/createe-xls.php?username=??&filename=yy",
    prez: "https://www.offidocs.com/createe-ppt.php?username=??&filename=yy"
  };

 
  var userxxx = Math.floor(Math.random() * 2000000);
  var filexxx = Math.floor(Math.random() * 2000000);
  for (var link_id in apps_urls){
        var url = apps_urls[link_id].replace("??", userxxx).replace("yy", filexxx);
        document.getElementById(link_id).firstElementChild.href = url;
  }
  document.getElementById('status').innerText = `Using LibreOffice editor`;
    

  for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  }
})();
