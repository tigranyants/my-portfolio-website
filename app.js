

function progress(){

    
    let items = document.querySelectorAll('.progress-item');
    const counters = Array(items.length);
    const intervals = Array(items.length);
    counters.fill(0);
    items.forEach((number,index) => {
  intervals[index] = setInterval(() => {
      if(counters[index] == parseInt(number.dataset.num)){
          clearInterval(intervals[index]);
        }else{
            counters[index] += 1;
            number.style.background = "conic-gradient(#13FF00 calc(" + counters[index] + "%), #161616 0deg)";
            number.setAttribute('data-value', counters[index] + "%");
            number.innerHTML = counters[index] + "%";
        }
    }, 15);
});
}

