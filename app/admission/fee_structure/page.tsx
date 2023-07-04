export const metadata = {
  title: "Admission Fee | PIAHS",
};

const commonfee = [
  {
    head: "Admission Fees",
    value: "Rs.15000/-",
  },
  {
    head: "Caution Fees",
    value: "Rs.5000/- (Refundable after the completion of course)",
  },
  {
    head: "Registration Fees",
    value: "As per University Notification",
  },
  {
    head: "Examination Fees",
    value: "As per University Notification",
  },
  {
    head: "Clinical Exposure Fees",
    value: "As per Hospital Norms",
  },
  {
    head: "Student Welfare Fees",
    value: "Rs.15000/-",
  },
];

const courses = [
  {
    name: "BPT",
    duration: "4 years academic + 6 months internship",
    fees: ["87,500/-", "87,500/-", "87,500/-", "87,500/-", "385000/-"],
  },
  {
    name: "BMLT",
    duration: "3 years academics + 6 months internship",
    fees: ["77,500/-", "77,500/-", "77,500/-", "Nil", "267500/-"],
  },
  {
    name: "BMRT",
    duration: "3 years academics + 6 months internship",
    fees: ["77,500/-", "77,500/-", "77,500/-", "Nil", "267500/-"],
  },
  {
    name: "DMRT",
    duration: "2 years",
    fees: ["67,500/-", "67,500/-", "Nil", "Nil", "170000/-"],
  },
  {
    name: "DMLT",
    duration: "2 years",
    fees: ["67,500/-", "67,500/-", "Nil", "Nil", "170000/-"],
  },
  {
    name: "DICU TECH",
    duration: "2 years",
    fees: ["67,500/-", "67,500/-", "Nil", "Nil", "170000/-"],
  },
  {
    name: "DOT TECH",
    duration: "2 years",
    fees: ["65,000/-", "65,000/-", "Nil", "Nil", "165000/-"],
  },
];

const installments = [
  {
    name: "Bachelor of Physiotherapy (BPT)",
    duration: "4 years",
    fees: ["40,000/-", "47,500/-"],
  },
  {
    name: "Bachelor of Medical Laboratory Technology (BMLT)",
    duration: "3 years",
    fees: ["30,000/-", "20,000/-"],
  },
  {
    name: "Bachelor of Medical Radiographic Technology (BMRT)",
    duration: "3 years",
    fees: ["47,500/-", "47,500/-"],
  },
  {
    name: "Diploma of Medical Radiographic Technology (DMRT)",
    duration: "2 years",
    fees: ["47,500/-", "47,500/-"],
  },
  {
    name: "Diploma of Medical Laboratory Technology (DMLT)",
    duration: "2 years",
    fees: ["47,500/-", "47,500/-"],
  },
  {
    name: "Diploma in Intensive Care Unit Technology (DICU Tech)",
    duration: "2 years",
    fees: ["47,500/-", "47,500/-"],
  },
  {
    name: "Diploma in Operation Theatre Technology (DOT Tech)",
    duration: "2 years",
    fees: ["47,500/-", "47,500/-"],
  },
];

const FeeStructure = () => {
  return (
    <div className="w-full h-auto">
      <h1 className="text-2xl font-babas">
        Fees Structure of Allied and Health Care Professional Courses (2023-24)
      </h1>

      <div className="w-full h-auto max-w-4xl pt-5 rounded-lg">
        <h1 className="w-full mb-5 text-xl font-medium text-blue-800">
          Annual Fees structure common for all the courses (to be paid once
          only)
        </h1>
        <div className="w-full ">
          {commonfee.map((fee, index) => (
            <div
              className={` ${
                index % 2 !== 0 ? "bg-white" : "bg-gray-200"
              } grid w-full grid-cols-3 py-2 px-3 rounded-sm`}
              key={index}
            >
              <h1 className="col-span-1 font-medium text-blue-600">
                {fee.head}
              </h1>
              <p className="col-span-2 font-medium text-neutral-600">
                {fee.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h1 className="mt-10 text-xl font-medium text-blue-800">Tuition Fees</h1>

      <div className="grid w-full grid-cols-8 gap-3 mt-5 ">
        <div className="col-span-1 font-bold">Course</div>
        <div className="col-span-2 font-bold">Course Duration</div>
        <div className="col-span-1 font-bold">1st year</div>
        <div className="col-span-1 font-bold">2nd year</div>
        <div className="col-span-1 font-bold">3rd year</div>
        <div className="col-span-1 font-bold">4th year</div>
        <div className="col-span-1 font-bold">Total</div>

        {courses.map((course) => (
          <>
            <div className="col-span-1">{course.name}</div>
            <div className="col-span-2">{course.duration}</div>
            {course.fees.map((fee, index) => (
              <div className="col-span-1" key={index}>
                {fee}
              </div>
            ))}
          </>
        ))}
      </div>

      <h1 className="mt-10 text-xl font-medium text-blue-700">
        Internship Fees
      </h1>
      <p className="mt-5">Will be charged as per concerned organization</p>

      <h1 className="mt-10 text-xl font-medium text-blue-700">
        Installment facility for Tuition Fees to be paid every year
      </h1>

      <div className="grid grid-cols-5 gap-4 mt-5">
        <div className="col-span-2 font-bold">Name of the course</div>
        <div className="col-span-1 font-bold">Course Duration</div>
        <div className="col-span-1 font-bold">1st year</div>
        <div className="col-span-1 font-bold">2nd year</div>

        {installments.map((installment) => (
          <>
            <div className="col-span-2">{installment.name}</div>
            <div className="col-span-1">{installment.duration}</div>
            {installment.fees.map((fee, index) => (
              <div className="col-span-1" key={index}>
                {fee}
              </div>
            ))}
          </>
        ))}
      </div>
      <h1 className="mt-10 text-xl font-medium text-blue-700">Hostel Fees</h1>
      <div className="w-full h-auto">
        <div className="flex items-center mt-5 space-x-2">
          <h1>Boys</h1>
          <p>1000,000/- (can be paid into 2 installments)</p>
        </div>

        <div className="flex items-center mt-5 space-x-2">
          <h1>Girls</h1>
          <p>1200,000/- (can be paid into 2 installments)</p>
        </div>
      </div>

      <h1 className="mt-10 text-xl font-medium text-blue-700">
        Bank Details for Fee Payment
      </h1>

      <div className="flex flex-col w-full h-auto mt-5 space-y-1">
        <p>
          Name of Account Holder: Pratiksha Institute of Allied Health Sciences
        </p>
        <p>Account Number : 502 000 670 76493</p>
        <p>Name of the Bank : HDFC Bank Ltd</p>
        <p>
          Branch name and address : Sixmile branch , VIP Road , Guwahati -781022
          IFSC Code : HDFC 0005221
        </p>
      </div>

      <p className="mt-10">
        NOTE: After payment of fees , please intimate us on Whatsapp No –
        9085122222. 9287957187 with details of student and payment. Collect the
        money receipt from college directly.
      </p>
    </div>
  );
};

export default FeeStructure;
