import {React} from 'react';
import { Component } from 'react';
import { db } from './FirebaseConfig';
import {ref,onValue, remove} from 'firebase/database';
import { auth } from './FirebaseConfig';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';

export class ShoppingCart extends Component{

    state = {
        products:{},     
    }
    
    //this arrow function calculate total sum
    totalSum=()=>{
        let sum = 0
        Object.keys(this.state.products).map((product) => {
            sum +=(this.state.products[product].quantity * this.state.products[product].product.price)
        })
        return sum;
    }
    componentDidMount()
    {
        let cartid = localStorage.getItem('cartid');
        let refrence = ref(db,'shopping-cart/'+cartid+'/items');
        onValue(refrence, (snapshot) => {
            let products = snapshot.val();
            this.setState({products:products});
           // this.calculatetotal();

        });
    }

    handleDelete = (product) =>{
        let products = {...this.state.products}; //spread operator
        delete products[product];
        this.setState({products:products});

        let cartid = localStorage.getItem('cartid');
        remove(ref(db,'shopping-cart/'+cartid+'/items/'+product));
    }

    handleClick = () =>{

        onAuthStateChanged(auth, (user) =>{
            if(user)
            {
                //logic of payment gateway
            }
            else
            {
                signInWithRedirect(auth, new GoogleAuthProvider());
            }
        })
    }

    render(){
        return( <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
            

                <tbody className='table-group-divider'>
                    {Object.keys(this.state.products).map((product, i)=>(<tr>
                        <th scope="row">{i+1}</th>
                        <td>{this.state.products[product].product.title}</td>
                        <td>{this.state.products[product].product.price}</td>
                        <td>{this.state.products[product].quantity}</td>
                        <td>{this.state.products[product].quantity * this.state.products[product].product.price}</td>
                        <td><button className='btn btn-danger ps-4 pe-4' onClick={()=>{this.handleDelete(product)}}>delete</button></td>
                    </tr>
                        ))}
                </tbody>

                <tfoot className='table-group-divider'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{this.totalSum()}</td>
                        <td><button className='btn btn-success pe-3 active' onClick={this.handleClick} >checkout</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        );
    }
}