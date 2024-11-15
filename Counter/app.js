function counter (){
    var currentTime = new Date();
    var newTime = new Date(2024, 11, 31);
    var currentTimeMS = currentTime.getTime();
    var newTimeMS = newTime.getTime();
    var duration = newTime - currentTime;
    var durationInDays = Math.floor(duration/(1000*60*60*24));
    var remainder = duration % (1000 * 60 * 60 * 24);
    var durationInHours = Math.floor(remainder/(1000*60*60));
    remainder = duration % (1000 * 60 * 60);
    var durationInMinutes = Math.floor(remainder/(1000*60));
    remainder = duration % (1000 * 60);
    var durationInSecond = Math.floor(remainder/1000);
    document.getElementById('counter').innerHTML=(`${durationInDays} Days : ${durationInHours} Hours : ${durationInMinutes} Minutes : ${durationInSecond} Seconds`);
    progressBar.innerHTML = Math.floor(elapsedPercentage) + '%';
    }
    setInterval(counter,1000);