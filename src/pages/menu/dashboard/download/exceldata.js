export const manuplateExcelData = (data) => {
  //map overall details
  let excelData = data.map((items) => {
    let tmpObj = {};

    //map student details
    items.students.map((students) => {
      tmpObj = { ...tmpObj, firstname: students.first_name };
      tmpObj = { ...tmpObj, lastname: students.last_name };
      tmpObj = { ...tmpObj, aadhar_no: students.aadhar_no };
      tmpObj = { ...tmpObj, age: students.age };
      tmpObj = { ...tmpObj, gender: students.gender };
      tmpObj = { ...tmpObj, Blood_Group: students.blood_group };
      tmpObj = { ...tmpObj, dob: students.dob };
      tmpObj = { ...tmpObj, class: students.class };
      tmpObj = {
        ...tmpObj,
        Extra_Curricular_Activities: students.extra_curricular,
      };
      tmpObj = { ...tmpObj, class: students.class };
      tmpObj = { ...tmpObj, community: students.community };
      tmpObj = { ...tmpObj, religion: students.religion };
      tmpObj = { ...tmpObj, height: students.height };
      tmpObj = { ...tmpObj, weight: students.weight };
      tmpObj = { ...tmpObj, mother_Tongue: students.mother_tongue };
      tmpObj = { ...tmpObj, Nationality: students.nationality };
      tmpObj = { ...tmpObj, proficiency_in_sports: students.prof_in_sports };
    });

    //map parent details
    let fatherParsed = JSON.parse(items.parentdetails[0].father_details);
    let motherParsed = JSON.parse(items.parentdetails[0].mother_details);
    let communicationAddresParsed = JSON.parse(
      items.addresses[0].communication_address
    );
    let permenantAddressParsed = JSON.parse(
      items.addresses[0].permanent_address
    );

    //father
    tmpObj = {
      ...tmpObj,
      Father_Name: fatherParsed.first_name + " " + fatherParsed.last_name,
    };
    tmpObj = { ...tmpObj, Father_Email: fatherParsed.email };
    tmpObj = { ...tmpObj, Income: fatherParsed.income };
    tmpObj = { ...tmpObj, Occupation: fatherParsed.occupation };
    tmpObj = { ...tmpObj, Work: fatherParsed.work };

    //mother
    tmpObj = {
      ...tmpObj,
      Father_Name: fatherParsed.first_name + " " + fatherParsed.last_name,
    };
    tmpObj = { ...tmpObj, Father_Email: motherParsed.email };
    tmpObj = { ...tmpObj, Income: motherParsed.income };
    tmpObj = { ...tmpObj, Occupation: motherParsed.occupation };
    tmpObj = { ...tmpObj, Work: motherParsed.work };

    //communiacion Address
    tmpObj = {
      ...tmpObj,
      Communication_Address_1: communicationAddresParsed.address_1,
    };
    tmpObj = {
      ...tmpObj,
      Communication_Address_2: communicationAddresParsed.address_2,
    };
    tmpObj = { ...tmpObj, Communication_City: communicationAddresParsed.city };
    tmpObj = {
      ...tmpObj,
      Communication_Pincode: communicationAddresParsed.pin_code,
    };
    tmpObj = {
      ...tmpObj,
      Communication_State: communicationAddresParsed.state,
    };

    //Permenant Address
    tmpObj = {
      ...tmpObj,
      Permenant_Address_1: permenantAddressParsed.address_1,
    };
    tmpObj = {
      ...tmpObj,
      Permenant_Address_2: permenantAddressParsed.address_2,
    };
    tmpObj = { ...tmpObj, Permenant_City: permenantAddressParsed.city };
    tmpObj = { ...tmpObj, Permenant_Pincode: permenantAddressParsed.pin_code };
    tmpObj = { ...tmpObj, Permenant_State: permenantAddressParsed.state };

    //primary Details
    tmpObj = { ...tmpObj, admission_no: items.admission_no };
    tmpObj = { ...tmpObj, email: items.email };
    tmpObj = { ...tmpObj, mobile: items.mobile }; //alumini_details
    tmpObj = { ...tmpObj, alumini_details: items.alumini_details };
    tmpObj = { ...tmpObj, relevant_type: items.relevant_type };
    tmpObj = { ...tmpObj, Application_Status: items.status };

    return tmpObj;
  });
  return excelData;
};
