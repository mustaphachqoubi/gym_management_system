import React from "react";

const AddMember = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-full z-50 mt-[100vh] lg:mt-0 md:mt-0">
      <div className="bg-slate-300 w-full mb-2 p-5 rounded-md h-full ">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 place-content-center md:p-8">
            <div>
              <h3>First name</h3>
              <input
                type="text"
                name="First name"
                title="First name"
                placeholder="First name"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>Last name</h3>
              <input
                type="text"
                name="Last anme"
                title="Last anme"
                placeholder="Last name"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>Phone number</h3>
              <input
                type="text"
                name="Phone"
                title="Phone"
                placeholder="Phone number"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>Email</h3>
              <input
                type="text"
                name="Email"
                title="Email"
                placeholder="Email"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>CIN</h3>
              <input
                type="text"
                name="CIN number"
                title="CIN number"
                placeholder="CIN"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>Gender</h3>
              <select
                name="Gender"
                title="Gender"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
              >
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div>
              <h3>Birth date</h3>
              <input
                type="date"
                name="Birth date"
                title="Birth date"
                placeholder="Birth date"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>Date of joining</h3>
              <input
                type="text"
                name="Date of joining"
                title="Date of joining"
                placeholder="Date of joining"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>membership</h3>
              <select
                name="membership"
                title="membership"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
              >
                <option value="">Basic (cardio)</option>
                <option value="">Silver (lifting)</option>
                <option value="">Golden (Full)</option>
              </select>
            </div>
            <div>
              <h3>face image</h3>
              <input
                type="file"
                name="Face Image"
                title="Face Image"
                placeholder="face image"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>CIN image</h3>
              <input
                type="file"
                name="CIN Image"
                title="CIN Image"
                placeholder="cin image"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>Price</h3>
              <input
                type="number"
                name="Price"
                title="Price"
                placeholder="Price"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
              />
            </div>
            <div>
              <h3>Payed ?</h3>
              <select
                name="Payed?"
                title="Payed?"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
              >
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div>
              <h3>Duration of membership</h3>
              <select
                name="Duration"
                title="Duration"
                className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
              >
                {months.map((m) => (
                  <option value="" key={m}>
                    {m} {m === 1 ? "Month" : "Months"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:mt-0 mt-4">
            <div className="bg-blue-500 w-full md:w-20 h-10 font-bold flex justify-center items-center text-white rounded-md hover:bg-blue-700 cursor-pointer">
              <button>Add</button>
            </div>
            <div
              onClick={() => {
                setAddMemberContent("hidden");
                document.body.style.overflow = "visible";
              }}
              className="bg-gray-400 text-zinc-700 font-bold w-full md:w-20 h-10 font-bold flex justify-center items-center text-white rounded-md hover:bg-gray-500 cursor-pointer"
            >
              <button>Close</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
