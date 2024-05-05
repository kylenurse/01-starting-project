export default function InputGroup({ onChange, userInput }) {

    return (

        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input value={userInput.initialInvestment} id="first" type="number" required onChange={(event) => onChange(event.target.value, 'initialInvestment')} />
                </p>

                <p>
                    <label>Annual Investment</label>
                    <input value={userInput.annualInvestment} id="second" type="number" required onChange={(event) => onChange(event.target.value, 'annualInvestment')} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input value={userInput.expectedReturn} id="third" type="number" required onChange={(event) => onChange(event.target.value, 'expectedReturn')} />
                </p>

                <p>
                    <label>Duration</label>
                    <input value={userInput.duration} id="fourth" type="number" required onChange={(event) => onChange(event.target.value, 'duration')} />
                </p>

            </div>
        </section>
    );
}