import Notiflix from 'notiflix';

const submitBt = document.querySelector('[type="submit"]');
const amount = document.querySelector('[name="amount"]');
const step = document.querySelector('[name="step"]');
const delay = document.querySelector('[name="delay"]');

submitBt.addEventListener('click', onSubmit);





function onSubmit(evt){
  evt.preventDefault();


const quantity = amount.value;
const firstTimeOut = Number(delay.value);
const allNextTimeOut = Number(step.value);
const quantityPromies = [];


for (let i = 0; i < quantity; i += 1){
  quantityPromies.push(i);
}

console.log(quantityPromies);

const promises = quantityPromies.map((promis, idx) => {
  if(idx === 0){
    createPromise(idx,firstTimeOut);
  } else {
    createPromise(idx,allNextTimeOut);
  }

 
  
  return promis;
});
};
 



function createPromise(position, delay) {

  return new Promise((res, rej) =>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
   res (console.log({ position, delay }));
  } else {
   rej(console.log({ position, delay }));
  }
})};

createPromise(2,1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  //createPromise(3,200);
//createPromise(2,1500)
//.then(result => Notiflix.Notify.success('Sol lucet omnibus')).catch(error => 
//  Notiflix.Notify.failure('Qui timide rogat docet negare'));

//createPromise(2, 1500)
//  .then(({ position, delay }) => {
//    Notiflix.Notify.success('Sol lucet omnibus');
//  })
//  .catch(({ position, delay }) => {
//    Notiflix.Notify.failure('Qui timide rogat docet negare');
//  });