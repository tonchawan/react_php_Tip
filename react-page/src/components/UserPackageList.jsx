import { useState ,useEffect } from 'react';
import '../Css/UserPackageList.css';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function UserPackageList(props) {

    const navigate = useNavigate();

    const user = JSON.parse(window.localStorage.getItem("user"));
    const [packageList, setPackageList] = useState([]);


    useEffect(()=>{
        axios.get('http://tip.test/api/buy/' + user.id)
        .then((res)=>{
            console.log(res.data.data);
            setPackageList(res.data.data)
        })
        .catch((err)=>{
            alert('Some thing error maybe You data is duplicate')
            console.log(err)
        })
    
    },[])


    const editDraft =(id)=>{
       props.setDraftId(id);
       navigate('/buyform')      
    }

    return(
<div className='user-package-list package-bg'>
    <div className='head-detail'  > 
        <p>Username :{user.username}<span style={{marginLeft : "20px"}}>Register Date :{user.created_at.toString().split("T")[0]}</span></p>   
    </div>
        <br/>
    <div> 

    <title>Insurance Report</title>
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>

    <div className='package-list-containner' >
        <h3>Package Detail </h3>
        <table>
            <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Package name</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Last updated</th>
                  <th scope="col">Buy Status</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {packageList.map((list) => (  
                    <tr >
                        <td>  {list.id} </td>
                        <td>  {list.title} </td>
                        <td>  {list.name} </td>
                        <td>  {list.lastname} </td>
                        <td>  {list.updated_at.toString().split('T')[0]} </td>
                        <td>  {list.OrderStatus === 1 ? "Purchase": "Draft"} </td>
                        <td>
                            <a href={`http://tip.test/api/loadPdf/${list.id}`}>
                                <button className = " btn-primary" >Download</button>
                            </a>
                        </td>
                        <td> {list.OrderStatus === 1 ? '':<button onClick={()=>editDraft(list.id)} className="btn-warning">Edit</button>}</td>
                </tr>
                  )
                )}

              </tbody>
        </table>
    </div>
    </div>
   


    <div>
    <a href={`http://tip.test/api/report/${user.id}`}><button className='getreport-btn' >Get report</button></a>
    </div>
</div>
    )  
}
export default UserPackageList;