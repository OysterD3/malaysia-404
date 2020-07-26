document.body.innerHTML = '<div class="m404-wrapper"> <div><h1 class="m404-title"> 404, the page can\'t be found. <br/> However, we can help them to get home! </h1> <div class="m404-back"><a href="/">Back to home</a></div> <div class="m404-box"> <div style="position: relative;"> <div class="child-spinner" style="display: none;"> <div class="spinner"></div> </div> <div class="child-avatar"><img src="" style="opacity: 1;width: 160px;height: 210px;"/></div> <div class="child-info"><h2 class="child-info__name"><span class="name"></span> <span class="gender"></span></h2> <div class="child-info__birthday"><strong style="width: 100px;display: inline-block">Birthday:</strong> <span class="info__data"></span> <span class="info__data"></span></div> <div class="child-info__missing"><strong style="width: 100px;display: inline-block">Missing date:</strong> <span class="info__data"></span></div> <div class="child-info__race"><strong style="width: 100px;display: inline-block">Race / Nationality:</strong> <span class="info__data"></span></div> <div class="child-info__report-no"><strong style="width: 100px;display: inline-block">Report No:</strong> <span class="info__data"></span></div> <div class="child-info__more-info"><a></a></div> </div> </div> </div> <div class="m404-more"><a href="https://knk2hilang.rmp.gov.my/" target="_blank">More missing kids</a></div> <div class="m404-github"> <a href="https://github.com/OysterD3/malaysia-404" target="_blank"> <svg aria-hidden="true" width="30px" height="30px" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style="margin-right: 5px;"> <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path> </svg> View on GitHub </a> </div> </div> </div> ';

function doCORSRequest(id, printResult) {
    document.querySelector("body > div > div > div.m404-box > div > div.child-avatar").style.display = "none";
    document.querySelector("body > div > div > div.m404-box > div > div.child-info").style.display = "none";
    document.querySelector("body > div > div > div.m404-box > div > div.child-spinner").style.display = "block";
    var x = new XMLHttpRequest();
    x.open("GET", location.protocol + '//cors-anywhere.herokuapp.com/http://knk2hilang.rmp.gov.my/MissingPerson/NewTrail?id=' + id);
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
document.write("<style>.m404-title{text-align:center}.m404-back a{margin-left:20px;color:#636363}.m404-back a:active{color:#636363}.m404-more{margin-top:20px;text-align:center}.m404-more a{color:#636363}.m404-more a:active{color:#636363}.m404-github{margin-top:50px;text-align:center;font-size:14px}.m404-github a{display:flex;justify-content:center;align-items:center;color:#636363;text-decoration:none}.m404-github a:active{color:#636363}.m404-github a:hover{color:#000}.m404-box{width:640px;min-height:210px;margin-top:15px;background-color:#fff;border-radius:30px;padding:30px;overflow:auto}.m404-box .child-spinner{position:absolute;left:50%;top:50%;transform:translate(-50%, 50%)}.m404-box .child-spinner .spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:4px solid #ababab;border-top:4px solid #404040;-webkit-animation:1s spin linear infinite;animation:1s spin linear infinite}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.m404-box .child-avatar{float:left;width:160px;height:216px;margin-right:20px}.m404-box .child-info{float:left;width:460px;overflow:hidden;font-size:14px;color:#5a5a5a}.m404-box .child-info__name{font-size:18px}.m404-box .child-info__name .gender{font-weight:normal}.m404-box .child-info__more-info{margin-top:20px}.m404-box .child-info__more-info a{background-color:#41b883;color:#fff;text-align:center;padding:10px 16px;text-decoration:none;display:inline-block;border-radius:6px}.m404-box .child-info__more-info a:hover{background-color:#349268}@media screen and (min-width: 640px){.m404-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:0 auto}}@media screen and (max-width: 640px){.m404-back{text-align:center}.m404-back a{margin-left:0;color:#636363}.m404-back a:active{color:#636363}.m404-box{width:auto;min-height:auto;border-radius:0}.m404-box .child-avatar{text-align:center;float:none;width:auto;height:auto;margin-right:0}}body{background-color:#e6e6e6}html,*{font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}</style>")
