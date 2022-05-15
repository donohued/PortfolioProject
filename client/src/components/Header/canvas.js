import React, {useRef, useEffect} from 'react'

const Canvas = props => {
    const { draw, ...rest } = props
    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        

        let frameCount = 0
        let animationFrameId
        
        const render = () => {
            frameCount++
            resizeCanvas(canvas)
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    function resizeCanvas(canvas) {
        const { width, height } = canvas.getBoundingClientRect()
        
        if (canvas.width !== width || canvas.height !== height) {
            //const { devicePixelRatio:ratio=1 } = window
            const ratio = 1
            const context = canvas.getContext('2d')
            canvas.width = width*ratio
          
            canvas.height = height*ratio
            context.scale(ratio, ratio)
            return true
        }
    
        return false
      }

    return <canvas id='wiggle-canvas' ref={canvasRef} {...props}/>
}




export default Canvas
