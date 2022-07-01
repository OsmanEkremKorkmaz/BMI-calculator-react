import React from 'react'

function Calculate() {
    const [weight, setWeight] = React.useState(localStorage.getItem('weight') || 0);
    const [height, setHeight] = React.useState(localStorage.getItem('height') || 0);
    const [bmi, setBmi] = React.useState(localStorage.getItem('bmi') || 0);
    const [bmiStatus, setBmiStatus] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const bmi = weight / ((height/100) * (height/100));
        setBmi(bmi);
        localStorage.setItem("bmi", bmi);
        localStorage.setItem("height", height);
        localStorage.setItem("weight", weight);
        if (bmi < 18.5) {
            setBmiStatus("Underweight");
        } else if (bmi < 25) {
            setBmiStatus("Normal");
        } else if (bmi < 30) {
            setBmiStatus("Overweight");
        } else {
            setBmiStatus("Obese");
        }
    }

  return (
    <div className='component'>
        <h4>Calculate BMI</h4>
        <form onSubmit={handleSubmit}>
            <input type="number" name="height" placeholder='height' value={height} onChange={e => {setHeight(e.target.value);}}/>
            <input type="number" name="weight" placeholder='weight' value={weight} onChange={e => {setWeight(e.target.value);}} />
            <button type="submit" value="Calculate" >Calculate</button>
        </form>
        {bmi > 0 && <p>Your BMI is {bmi} and you are {bmiStatus}</p>}
    </div>
  )
}

export default Calculate