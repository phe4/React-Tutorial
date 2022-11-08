const terms = {
    "Fall": "Fall",
    "Winter": "Winter",
    "Spring": "Spring",
}

const TermRadioButton = ({term, selectedTerm, setSelectedTerm}) =>(
    <div className='mx-1'>
        <input type="radio" id={term} className="btn-check" checked={term === selectedTerm} autoComplete="off"
         onChange={() => setSelectedTerm(term)} />
        <label className="btn btn-outline-success m-2 p-2 w-100" htmlFor={term} data-cy={term}>
        { term }
        </label>
    </div>
);


const TermSelector = ({selectedTerm, setSelectedTerm}) => (
    <div className="btn-group" role="group"> 
        { Object.keys(terms).map(term => <TermRadioButton key={term} term={term} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>) }
    </div>
);

export default TermSelector;
