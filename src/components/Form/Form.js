import "./Form.scss";

const Form = () => {

    return ( 
        <form className="form bookingForm" action="" method="POST" target="_self">

            <input className="form__field" type="text" name="checkIn" placeholder="Check in"/>
            <input className="form__field" type="text" name="checkOut" placeholder="Check Out" />
            <input className="form__field" type="number" name="adults" placeholder="Adults" />
            <input className="form__field" type="number" name="children" placeholder="Children" />
            <input className="form__field btn btn-primary" type="submit" value="Book Now" />

        </form>
     );
}
 
export default Form;