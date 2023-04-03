import React ,{Component} from 'react'
import Card from '../card'
import styles from "../../App.module.css"
 //turulttei ajlah function turul n yuch baij bolno


class State extends Component{
    state = {
        name: "ene bol state iin object yum aa",
        zurag: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
        type: true,
        number: 99999999,

        null :null ,
        arr : [
            {
                title:"Bat@mail.com",
                des: 99966666,
                img : "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro."
            },
            {
                title:"Galt@mail.com",
                des: 99999999,
                img : "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro."
            },
            {
                title:"Dorj@mail.com",
                des: 88888888,
                img: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
                css:styles.box
            },
        ]
    }

  render(){
    console.log(this.state)
    return(
        <div className={styles.grid }>
            {this.state.arr.map((props)=>{
                return(
                    <

                    Card
                      title =   {props.title}
                      des = {props.des }
                      img = {props.img}
                      styles ={props.css}
                    />
                        
                
                )
            })}
        </div>
    )
  }

}
export default State