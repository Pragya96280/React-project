let name = 'Mohan';
function CheckEvenOrOdd(num){

if(num % 2 === 0){
  return <div> Even </div>
}
else{
  return <div> Odd </div>
}
}
 function CheckAlphabet(){
  switch('char'){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return <div> Vowel </div>
      default:
        return <div> Not Vowel</div>
  }
}

let num = 4;
const users = [
  {name:'Pragya', age:19},
  {name:'Nikita', age:20},
  {name:'Shiwani', age:21}
]
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <h2> If Else Statement </h2>
      <div>
        {
          CheckEvenOrOdd(5)
        }
        {
          num % 2 ===0 
          ? <div>Even Number</div>
          : <div> Odd Number </div>
        }
        <h2> If Statement </h2>
        {
          num % 2 === 0 && <div> Even number </div>
        }
        {
          num % 2 ===0 && <div> Odd Number </div>
        }
      </div>
      <h3> Loop </h3>
      {
        users.map ((item, index) =>{
          return <div Key={index}> {item.name} - {item.age}</div>
        })
      }
      <h3> Switch </h3>
      {
        CheckAlphabet('z')
      }
    </div>
  );
}

export default Jsx;
export function Greet(){
    return <h1> Hello World </h1>
}