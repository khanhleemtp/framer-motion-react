# framer-motion-react

==========================================================
# 2, tree-pj

# App.js Header.js----> Router(Switch) --> Home.js
#                                       --> Base.js
#                                       --> Toppings.js
#                                        --> Order.js

==========================================================
# 3, animating elements

# import { motion } from 'framer-motion'
# <motion.element animate={{}}>Hello<motion.element>

==========================================================
# 4, initial animation State

# inital: from : <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }}>
# vw: view width : góc nhìn hiện tại  
# animate: to 

=========================================================
# 5, transition options

# <motion.element initial={{}} animate={{}} transtion={{ delay: 1.5, duration: 3}}>
# delay: time to start animation
# duration: timeEnd - timeStart 
# type: 'tweet' ; kiểu lò xo:  type: 'spring', độ cứng: stiffness: 120
