import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function Base({ addBase, pizza }) {

    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className="base container"
            initial={{ x: '100vw'}}
            animate={{ x: 0}}
            transtion={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
            {bases.map(base => {
                let spanClass = pizza.base === base ? 'active' : '';
                return (
                <motion.li key={base} onClick={() => addBase(base)}
                    whileHover={{ scale: 1.3, originX: 0 ,color: '#f8e112'}}
                    transtion={{ type: 'string', stiffness: 300 }}
                >
                    <span className={spanClass}>{ base }</span>
                </motion.li>
                )
            })}
            </ul>
    
            {pizza.base && (
            <motion.div className="next"
                initial={{ y: '-100vw'}}
                animate={{ y: 0 }}
                transtion={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            >
                <Link to="/toppings">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 8px rgb(255, 255, 255)',
                        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
                    }}
                >Next</motion.button>
                </Link>
            </motion.div>
            )}
    
      </motion.div>
    )
}

export default Base
