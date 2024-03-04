import React from 'react'

export default function FormSelect() {
    const inputFile = React.useRef()
    const selectMaxNumFiles = React.useRef()
    const selectMaxSize = React.useRef()

    let maxNumFile = [1,2,3,4,5]
    let maxSize = [50,100,200,500,1000]
    const onClickButton = () => {
        let selectMaxNumFiles = selectMaxNumFiles.current.value
        let maxSize = selectMaxSize.current.value

        if(inputFile.current.files.length > maxNumFile){
            alert(`เลือกได้ไม่เกิน ${maxNumFile} ไฟล์`)
            return
        }
        for(let f of inputFile.current.files){
            if(f.size > maxSize * 1000){
                alert(`ขนาดแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`)
                return
            }
        }
        alert('File OK')

    }
  return (
    <div className="mt-4 mx-auto p-3 rounded"
    style={{width:'400px',background:'#cee'}}>
    
    <form className="form-group mb-3">
        <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
        <select id="maxNumFile" className="form-select form-select-sm" ref={selectMaxNumFiles}>
        {
            maxNumFile.map(i =>{
                return <option value ={i}>{i}</option>
            })
        }
        </select>
    </form>

    </div>
  )
}
