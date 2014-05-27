
/***
*JavaScript for stone910.com
*version 0.1
*timestamp Friday, May 23rd, 2014
*author Bryan.WEI, bryan.wei@hotmail.com, volving.net
*
*/


function validation(v1, v2, v3, v4, v5) {
    //alert("v1:'" + v1 + "' v2:'" + v2 + "' v3:'" + v3 + "' v4:'" + v4 + "' v5:'" + v5 + "'");
    //NaN
    if (isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5)) {
        return 0; //Only numbers are allowed
    } else if (v1 > 0 && v2 > 0 && v3 > 0 && v4 > 0 && v5 > 0) {
        return 2;//Positive numbers are allowed
    } else {
        return 1;//All right
    }
}
function btn_shipment_calc() {
    //alert("button_clicked");
    document.getElementById("shipment_calc").style.display = "block";
    document.getElementById("tons_calc").style.display = "none";
    //alert("tons_calc hidden");
    document.getElementById("title_shipment_calc").style.display = "block";
    document.getElementById("title_tons_calc").style.display = "none";
    //alert("tons_calc hidden");
    //alert("shipment_calc show");
}
function btn_tons_calc() {
    document.getElementById("tons_calc").style.display = "block";
    document.getElementById("shipment_calc").style.display = "none";

    document.getElementById("title_tons_calc").style.display = "block";
    document.getElementById("title_shipment_calc").style.display = "none";
}


function shipment_calc() {

    //    alert("Hello!");
    var tkmm = document.getElementById('Number1').value;//thickness in milimeter
    var ppt = document.getElementById('Number2').value;//density
    var cvr = document.getElementById('Number3').value;//Area coverage
    var cpc;// = document.getElementById('Number4').value;//shipment every quare meter
    var ts = document.getElementById('Number5').value;//weight in tons
    var tkm;// = document.getElementById('Number6').value;//thickness in meter
    var dns = document.getElementById('Number7').value;//density

    //    alert("Hello!" + "tkmm:'" + tkmm + "' ppt:'" + ppt + "' cvr:'" + cvr + "' cpc:'" + cpc + "' ts:'" + ts + "' tkm:'" + tkm + "' dns:'" + dns + "'");
    var rst = validation(tkmm, 1, dns, ppt, 1);
    switch (rst) {
        case 0:
            alert("Input numbers only!");
            break;
        case 1:
            alert("Negatives are illegal!");
            break;
        default:
            tkm = tkmm / 1000;
            cvr = ts / tkm / dns;
            cpc = ppt / cvr;

            document.getElementById('Number6').value = tkm;
            document.getElementById('Number3').value = cvr;
            document.getElementById('Number4').value = cpc;

    }


}
function ton_calc() {
    var tkmm = document.getElementById("Number8").value;
    var cvr = document.getElementById("Number9").value;
    var dns = document.getElementById("Number10").value;
    var wt = document.getElementById("Number11").value;
    //alert("--");
    var wtSum = document.getElementById("Number12").value;
    //alert("--" + isNaN(wtSum)+"--value:" + wtSum);
    if (isNaN(wtSum)) {
        wtSum = 0;
    }
    //alert("wtSum:"+wtSum);


    //alert(tkmm + "--" + cvr + "--" + dns + "--" + wt + "--" + wtSum);
    var rst = validation(tkmm, cvr, dns, 1, 1);
    switch (rst) {
        case 0:
            alert("Input numbers only!");
            break;
        case 1:
            alert("Positive only!");
            break;
        default:
            wt = tkmm * cvr * dns / 1000;
            document.getElementById('Number11').value = wt;
            //      alert("wt:  "+wt);
            wtSum = parseFloat(wtSum) + parseFloat(wt);
            document.getElementById('Number12').value = wtSum;
            //      alert("TotalAmount: "+wtSum+"  tons");
    }


}
function btn_over(btnName) {
    document.getElementById(btnName).style = "border:2px solid White";
}
function btn_out(btnName) {
    document.getElementById(btnName).style = "border:0";
}

function addfavorite() {
    var title = '聚石网';
    var url = 'http://www.stone910.com';
    alert("sb!");
    try {
        window.external.addFavorite(url, title);
    }
    catch (e1) {
        try {
            window.external.addToFavoritesBar(url, title);
        }
        catch (e2) {
            alert('加入收藏失败，请您手工加入。')
        }
    }
    /*
    window.external.AddFavorite(location.href, document.title);
    
    if (document.all) 
    { 
        window.external.addFavorite("http://www.stone910.com","聚石网"); 
    } 
    else if (window.sidebar) 
    { 
        window.sidebar.addPanel("聚石网","http://www.stone910.com", ""); 
    } 
    */
}
/*
function createShortcut() {
    try {
        var fso = newActiveXObject("Scripting.FileSystemObject");
        var shell = newActiveXObject("WScript.Shell");
        var tagFolder = shell.SpecialFolders("Desktop");
        alert("hello");
        if (!fso.FolderExists(tagFolder)) {
            fso.CreateFolder(tagFolder);
        }
        if (!fso.FileExists(tagFolder + "\\stone910.lnk")) {
            var WshSysEnv = shell.Environment("Process");
            iLocal = (WshSysEnv.Item("SystemRoot") + "\\logo_stone910.ico");
            iRemote = ("/Images/2.ico"); 
            var xPost = newActiveXObject("Microsoft.XMLHTTP");
            xPost.Open("GET", iRemote, 0);
            xPost.Send();
            var sGet = newActiveXObject("ADODB.Stream");
            sGet.Mode = 3;
            sGet.Type = 1;
            sGet.Open();
            sGet.Write(xPost.ResponseBody);
            sGet.SaveToFile(iLocal, 2);

            var link = shell.CreateShortcut(tagFolder + "\\stone910.lnk");
            link.Description = "";
            link.Hotkey = "Ctrl+Alt+e";
            link.TargetPath = "http://www.stone910.com/";
            link.IconLocation = iLocal;
            link.WindowStyle = 3;
            link.WorkingDirectory = "c:\\blah";
            link.Save();
            alert("Successfully created");
            }
    }
    catch (ex) {
        alert("Failed to created?");
        }
}

*/



/**
 * 
 */

/*
$(function () {
    $(".slidetabs").tabs(".images > div", {
        // enable "cross-fading" effect
        effect: 'fade',
        fadeOutSpeed: "fast",
        // start from the beginning after the last tab
        rotate: true
        // use the slideshow plugin. It accepts its own configuration
    }).slideshow();
    $(".slidetabs").data("slideshow").play();
});

function setTab(name, show, n) {
    for (i = 1; i <= n; i++) {
        // alert("name:"+name+";show:"+show+";n:"+n);
        var tab = document.getElementById(name + "s" + i);
        var cntx = document.getElementById(name + i);
        tab.className = ((i == show) ? "hover" : "");
        cntx.style.display = ((i == show) ? "block" : "none");
    }
}

function setTab2(name, show, n) {
    for (i = 1; i <= n; i++) {
        // alert("name:"+name+";show:"+show+";n:"+n);
        var tab = document.getElementById(name + "s" + i);
        var cntx = document.getElementById(name + i);
        tab.className = ((i == show) ? "p_tab_act" : "p_tab");
        cntx.style.display = ((i == show) ? "block" : "none");
    }
}
*/
function add_fav() {
    //var strHref = window.location.href;
    //this.style.behavior = 'url fault#homepage)';
    //this.setHomePage('http://www.stone910.com');
}
/*
<a href="#" onclick="AddFavorite(window.location,document.title)">加收藏</a>
<a href="#" onclick="SetHome(this,window.location)">设首页</a>
*/
function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("Adding failed, please press Ctrl+D to add!");
        }
    }
}

function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("Browser rejected!\n Input 'about:config' into url textbox and press ENTER. Set the value of [signed.applets.codebase_principal_support] to 'true'!");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        }
    }
}