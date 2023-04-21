import Notiflix from 'notiflix';


const form = document.querySelector('.form')
const {amount, step, delay} = form;



form.addEventListener('submit', onSubmit);

function onSubmit(evt){
   evt.preventDefault();
   let delayFirst = delay.valueAsNumber;
   let nextStep = step.valueAsNumber;
   
   for (let i = 0; i < amount.value; i += 1){
    
     if(i === 0){
      createPromise(i,delay.value)
      .then(({ position, delay }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });
    }  else  {
      let nextDelay = delayFirst += nextStep;

    createPromise(i, nextDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    }
   
    setTimeout(() => {
       evt.target.reset(); 
    },1000)

}

function createPromise(position, delay) {
  
    return  new Promise((res, rej) =>{
    const shouldResolve = Math.random() > 0.3;
    const timerId = setTimeout(() => {
    if (shouldResolve) {
     res ({ position, delay });
    } else {
     rej({ position, delay });
    }
  }, delay);
  })
}





