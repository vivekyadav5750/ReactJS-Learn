import React from "react";
import styles from "./nav.module.css";

class Navbar extends React.Component {
    render(){
        const {count} = this.props;
        return (                          
            <div className={styles.nav}> 
                <div className={styles.title}>  Movie App </div>

                <div className={styles.cartIconContainer}>
                    <img className={styles.cartIcon}
                        alt="Cart-Icon"
                        src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
                    />
                   <span className ={styles.cartCount}>{count}</span>
                </div>
            </div>  
        );
    }

}

export default Navbar;
