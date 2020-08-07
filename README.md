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

===========================================================
# 6, hover animations

# <motion.element whileHover={{ originX: 0, scale: 1.5, color: '#f8e112' }}>
#         <motion.button whileHover={{ scale: 1.5,
#                  textShadow: '0px 0px 8px rgb(255, 255, 255)',
#                  boxShadow: '0px 0px 8px rgb(255, 255, 255)' }} /></motion.button>
#  originX: vị trí hiện tại

===============================================================
# 7 variants-1

# object containerVariants = { hidden: {x: 100vw}, visible: { x: 0, transition: { type: 'spring', stiffness: 120 }}}
# <motion.element variants={containerVariants} initial="hidden" animate="visible" >
# Tất cả thuộc tính của thằng cha sd motion, thằng con sd motion thừa kế và có thể ghi đè lên
# K cần ghi lại, chỉ cần đè lên :V => GOOD 

===================================================================
# 8 variants-2
# transition : { type: 'spring', mass: 0.4, damping: 8}
# mass: 0.4, số lần di chuyển ở vị trí ban đầu
# damping: giảm lực lò xo 
# staggerChildren: thời gian giữa những thằng con
# when: "beforeChildren": cha xh trước con

===================================================================
# 9 keyframe
# scale: [1.1,1,1.1,1,1.1,1],
# chuyển động giữa các trạng thái

====================================================================
# 10 repeating-animations
# yoyo: Số lần lặp, vd 10 -> 5, Infinity: vô tận
#         transition: { duration: 0.3, yoyo: Infinity }