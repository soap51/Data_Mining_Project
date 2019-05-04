export default ({name , text , onChange , value , checked}) => (
    <div className="containerRadioButton">
        <div className="radio">
            <input onChange={onChange} value={value}  name={name} type="radio" checked={checked}/>
            <label  className="radio-label">{text}</label>
        </div>
        <style jsx>{`
        
        `}</style>
    </div>
)