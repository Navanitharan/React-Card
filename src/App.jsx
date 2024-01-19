import Card from './Comp'
import"bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const check = <FontAwesomeIcon icon={faCheck}/>;
const wrong = <FontAwesomeIcon icon={faXmark}/>
const st = `style = {{color:"greay"}}`
function App() {
  const planDetails = [
    {
      planeName:"FREE",
      price : '0',
      features : [
        {
          name:"5 Users",
          enable:true
        },
        {
          name:"50GB Storage",
          enable:true
        },
        {
          name:"Unlimited Public Project",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Project",
          enable:false
        },
        {
          name:"Dedicated Phone Support",
          enable:false
        },
        {
          name:"Free Subdomain",
          enable:false
        },
        {
          name:"Monthly Status Reports",
          enable:false
        }
      ]
    },
    {
      planeName:"PLUS",
      price : '9',
      features : [
        {
          name:"10 Users",
          enable:true
        },
        {
          name:"50GB Storage",
          enable:true
        },
        {
          name:"Unlimited Public Project",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Project",
          enable:true
        },
        {
          name:"Dedicated Phone Support",
          enable:true
        },
        {
          name:"Free Subdomain",
          enable:true
        },
        {
          name:"Monthly Status Reports",
          enable:false
        }
      ]
    },
    {
      planeName:"PRO",
      price : '49',
      features : [
        {
          name:"50 Users",
          enable:true
        },
        {
          name:"50GB Storage",
          enable:true
        },
        {
          name:"Unlimited Public Project",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Project",
          enable:true
        },
        {
          name:"Dedicated Phone Support",
          enable:true
        },
        {
          name:"Free Subdomain",
          enable:true
        },
        {
          name:"Monthly Status Reports",
          enable:true
        }
      ]
    }
  ]
  return (
    <div className="container">
      <div className="row d-flex justify-content-center column-gap-3 bg-primary p-3">
        {planDetails.map((card)=>{
          return <Card data={card}/>
        })}
      </div>
    </div>
  );
}

export default App;
