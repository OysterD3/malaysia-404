document.body.innerHTML = '<div class="m404-wrapper"> <div> <h1 class="m404-title"> 404, the page can\'t be found. <br /> However, we can help them to get home! </h1> <div class="m404-back"> <a href="/">Back to home</a> </div> <div class="m404-box"> <div style="position: relative;"> <div class="child-spinner" style="display: none;"> <div class="spinner"></div> </div> <div class="child-avatar"> <img src="" style="opacity: 1;width: 160px;height: 210px;" /> </div> <div class="child-info"> <h2 class="child-info__name"> <span class="name"></span> <span class="gender"></span> </h2> <div class="child-info__birthday"> <strong style="width: 100px;display: inline-block">Birthday:</strong> <span class="info__data"></span> <span class="info__data"></span> </div> <div class="child-info__missing"> <strong style="width: 100px;display: inline-block">Missing date:</strong> <span class="info__data"></span> </div> <div class="child-info__race"> <strong style="width: 100px;display: inline-block">Race / Nationality:</strong> <span class="info__data"></span> </div> <div class="child-info__report-no"> <strong style="width: 100px;display: inline-block">Report No:</strong> <span class="info__data"></span> </div> <div class="child-info__more-info"> <a></a> </div> </div> </div> </div> <div class="m404-more"> <a href="https://knk2hilang.rmp.gov.my/" target="_blank">More missing kids</a> </div> </div> </div>';

function doCORSRequest(id, printResult) {
    document.querySelector("body > div > div > div.m404-box > div > div.child-avatar").style.display = "none";
    document.querySelector("body > div > div > div.m404-box > div > div.child-info").style.display = "none";
    document.querySelector("body > div > div > div.m404-box > div > div.child-spinner").style.display = "block";
    var x = new XMLHttpRequest();
    x.open("GET", 'http://cors-anywhere.herokuapp.com/http://knk2hilang.rmp.gov.my/MissingPerson/NewTrail?id=' + id);
    x.onload = x.onerror = function () {
        printResult(x.responseText || "");
    };
    x.send();

    document.querySelector("body > div >  div > div > div > div > img").src = 'https://knk2hilang.rmp.gov.my/Images/Uploaded/' + id + '.jpg';
}

var randomId = Math.floor((Math.random() * 6500) + 1)

doCORSRequest(randomId, function printResult(result) {
    var notFoundIndicator = result.includes("Object reference not set to an instance of an object.");
    if (notFoundIndicator) {
        randomId = Math.floor((Math.random() * 6500) + 1)
        doCORSRequest(randomId, printResult)
    }
    document.querySelector("body > div > div > div.m404-box > div > div.child-avatar").style.display = "block";
    document.querySelector("body > div > div > div.m404-box > div > div.child-info").style.display = "block";
    document.querySelector("body > div > div > div.m404-box > div > div.child-spinner").style.display = "none";
    var doc = new DOMParser().parseFromString(result, "text/html");
    var tds = Array.from(doc.querySelectorAll("table tr td:not(.calendar-day"));
    var filtered = tds.map(function(el){ return el.innerText.trim() }).filter(function(el){ return el !== ":"});
    var gender = "Unknown"
    if (filtered[13].toLowerCase() === "lelaki,") {
        gender = "Male";
    } else if (filtered[13].toLowerCase() === "perempuan,") {
        gender = "Female";
    }
    var data = {
        missingDate: filtered[1],
        name: filtered[3],
        nickname: filtered[5],
        age: Number(filtered[7].match(/\d+/).join("")),
        birthday: filtered[9],
        identity: filtered[11],
        gender: gender,
        race: filtered[15],
        nationality: filtered[17],
        address: filtered[19],
        reportNo: filtered[21],
        remark: filtered[23],
    };
    document.querySelector("body > div >  div > div > div > div.child-info > h2.child-info__name > span.name").innerText = data.name;
    document.querySelector("body > div >  div > div > div > div.child-info > h2.child-info__name > span.gender").innerText = '(' + data.gender + ')';
    document.querySelector("body > div > div > div.m404-box > div > div.child-info > div.child-info__birthday > span:nth-child(2)").innerText = data.birthday;
    document.querySelector("body > div > div > div.m404-box > div > div.child-info > div.child-info__birthday > span:nth-child(3)").innerText = '(' + data.age + ')';
    document.querySelector("body > div >  div > div > div > div.child-info > div.child-info__missing > span").innerText = data.missingDate;
    document.querySelector("body > div >  div > div > div > div.child-info > div.child-info__race > span").innerText = data.race + ', ' + data.nationality;
    document.querySelector("body > div >  div > div > div > div.child-info > div.child-info__report-no > span").innerText = data.reportNo;
    document.querySelector("body > div >  div > div > div > div.child-info > div.child-info__more-info > a").innerText = 'More information';
    document.querySelector("body > div >  div > div > div > div.child-info > div.child-info__more-info > a").href = 'http://knk2hilang.rmp.gov.my/MissingPerson/NewTrail?id=' + randomId;
});
var url = document.currentScript.getAttribute("homePageUrl");
var text = document.currentScript.getAttribute("homePageText");
if (url) {
    document.querySelector("body > div > div > div.m404-back > a").href = url;
}

if (text) {
    document.querySelector("body > div > div > div.m404-back > a").innerText = text;
}
document.write("<style>.m404-title{text-align:center}.m404-back a{margin-left:20px;color:#636363}.m404-back a:active{color:#636363}.m404-more{margin-top:20px;text-align:center}.m404-more a{color:#636363}.m404-more a:active{color:#636363}.m404-box{width:640px;min-height:210px;margin-top:15px;background-color:#fff;border-radius:30px;padding:30px;overflow:auto}.m404-box .child-spinner{position:absolute;left:50%;top:50%;transform:translate(-50%, 50%)}.m404-box .child-spinner .spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:4px solid #ababab;border-top:4px solid #404040;-webkit-animation:1s spin linear infinite;animation:1s spin linear infinite}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.m404-box .child-avatar{float:left;width:160px;height:216px;margin-right:20px}.m404-box .child-info{float:left;width:460px;overflow:hidden;font-size:14px;color:#5a5a5a}.m404-box .child-info__name{font-size:18px}.m404-box .child-info__name .gender{font-weight:normal}.m404-box .child-info__more-info{margin-top:15px}@media screen and (min-width: 640px){.m404-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:0 auto}}@media screen and (max-width: 640px){.m404-back{text-align:center}.m404-back a{margin-left:0;color:#636363}.m404-back a:active{color:#636363}.m404-box{width:auto;min-height:auto;border-radius:0}.m404-box .child-avatar{text-align:center;float:none;width:auto;height:auto;margin-right:0}}body{background-color:#e6e6e6}html,*{font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}</style>")
