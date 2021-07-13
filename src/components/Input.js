export default function Input(props) {
  return (
    <input type={props.type}  value={props.value} placeholder={props.inputType} id={`${props.inputType}-id`} onChange={props.onChange} />
  )
}