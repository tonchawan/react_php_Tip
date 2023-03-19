function Preview (params) {
    
return(
<div>
  <div id="preview-form">
    <p>Package Name: {buyData.packageId}</p>
    <p>Prefix: {buyData.prefix}</p>
    <p>First Name: {buyData.name}</p>
    <p>Last Name: {buyData.lastname}</p>
    <p>Identity Number: {buyData.govermentId}</p>
    <p>Address: {buyData.address}</p>
    <p>Sub-District: {buyData.sub_district}</p>
    <p>District: {buyData.district}</p>
    <p>Province: {buyData.provience}</p>
    <p>Post code: {buyData.postcode}</p>
    <p>Email: {buyData.email}</p>
    <p>Date of Birth: {buyData.dob}</p>
    <p>Coverage Start Date: {buyData.startDate}</p>
    <p>Coverage End Date: {buyData.endDate}</p>
    <p>Premium: {buyData.premium}</p>
    <p>Beneficial: {buyData.beneficial}</p>
  </div>

  <form onSubmit={handleSubmit}>
    {/* Rest of the form code */}  
    <button type="submit" onClick={handleSave}>Confirm</button>
    <button type="button" onClick={handleSave}>Save</button>
    <button type="button" ><Link to="/">Cancel</Link></button>
  </form>
</div>
)
}
export default Preview;