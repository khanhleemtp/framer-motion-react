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

====================================================================
# 11 animate presence

# Cho biết sự hiện diện của element bằng cách bao quanh nó
# Khi không hiện diện (xóa khỏi DOM ) thì nó gọi thuộc tính exit
# import { motion, AnimatePresence } from 'framer-motion'
# <AnimatePresence> <motion.element exit={ y: -1000}> .... </ motion.element></ AnimatePresence>

======================================================================
# 12 animate routes

# 1. const location = useLocation();
# 2. <AnimatePresence exitBeforeEnter>
# <Switch location={location} key={location.key}>
#   <Route path="/home">< Base addTopping={addBase} pizza={pizza} /></Route>
# <Switch>
# </ AnimatePresence>

# 3. const variants= {exit: { x: '100vw', transtion: { ease: 'easeInOut'}}} 
# 4 <motion.element  variants={variants} exit="exit">
# exitBeforeEnter: đảm bảo tất cả hoạt cảnh khác được hoàn thành xóa trc khi chuyển route

==========================================================================
# 13 Modal Animate
# element
 - < AnimatePresence> 
 - {
     - showModal && 
     - < motion.div className="backdrop">
     - < /motion.div>
     - </ AnimatePresence>
 }

 # css .backdrop{ position:fixed, top: 0, left: 0, width: 100%, height: 100%, background: rgba(0,0,0,0.5), z-index: 1}


============================================================================
# 14 onExitComplete={ () => setShowModal(false)} 
- Khi chuyển mỗi route =>  xóa  element khỏi DOM ==> hàm này được gọi 



