document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    setTimeout(()=>{
        document.querySelector('input').style = 'transform: translateY(-15rem);'
    }, 200)
    document.querySelector('.count-down').style = 'transform: translateY(-11rem);'
    setTimeout(()=>{
        document.querySelector('input').remove()
        document.querySelector('.count-down').style = 'transform: translateY(0);'
    }, 500)
    let count = e.target.elements.time.value
        if (count <= 60) {
            setInterval(()=>{
                count--
                if (count > -1) {
                    document.querySelector('audio').src = 'tink.wav'
                    document.querySelector('.count-down .sec').textContent = count
                } else {
                    document.querySelector('.count-down').textContent = 'Time up'
                    document.querySelector('.count-down').classList.add('animate')
                    document.querySelector('audio').src = 'alarm.m4a'
                    const btn = document.querySelector('button')
                    btn.style = 'opacity: 1;'
                    btn.addEventListener('click',()=>{
                        location.assign('index.html')
                    })
                }
            }, 1000)
        } else {
            let min = Math.round(count / 60)
            document.querySelector('.count-down .min').textContent = min
            let sec = new String(count)
            let seconds = sec[sec.length-1]
            console.log(seconds)
            document.querySelector('.count-down .sec').textContent = seconds
            setInterval(()=>{
                seconds--
                if (seconds > -1) {
                    document.querySelector('audio').src = 'tink.wav'
                    document.querySelector('.count-down .sec').textContent = seconds
                } else {
                    min--
                    seconds=5
                    document.querySelector('.count-down .min').textContent = min
                    document.querySelector('.count-down .sec').textContent = seconds
                }
                if (min === 0 && seconds === 0) {
                    document.querySelector('audio').src = 'alarm.m4a'
                    document.querySelector('.count-down').textContent = 'Time up'
                    document.querySelector('.count-down').classList.add('animate')
                    const btn = document.querySelector('button')
                    btn.style = 'opacity: 1;'
                    btn.addEventListener('click',()=>{
                        location.assign('index.html')
                    })
                }
                
            }, 1000)
            
        }
    
})
const test = new String('abcd')
console.log(test)
console.log(test[1])
