import React, { useState } from "react";
import { useFireStore } from "../hooks/useFireStore";
import { useStoreState } from "easy-peasy";
const NewInvoice = () => {

  const {useAddDoc} =  useFireStore()
  const [ invoiceNo, setInvoiceNo ] = useState("")
  const [ address, setAddress ] = useState("")

  const user = useStoreState((state) => state.user);
  let currentDate = new Date().toJSON();
  const handleAddDoc = async () => {
    const res = await useAddDoc({
      collectionName: 'invoice',
      
      data: {
        created_by: user.uid,
        created_at: currentDate,
        invoice_no: invoiceNo,
        address
      },
    });
    console.log(res);
    console.log(user.uid);
  };
  

  return (
    <>
      <>
      
        {/* Invoice */}
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
          <div className="sm:w-11/12 lg:w-3/4 mx-auto">
            {/* Card */}
            <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
              {/* Grid */}
              <div className="flex justify-between">
                <div></div>
                {/* Col */}
                <div className="text-left">
                  <label className=" mt-3 text-xl md:text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                    Invoice No
                  </label>{" "}
                  <br />
                  <input
                    className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                    type="text" name="invoiceNo" onChange={(e)=>setInvoiceNo(e.target.value) }
                  />
                  <br />
                  <label className=" mt-3 text-xl md:text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                    Address
                  </label>
                  <br />
                  <input
                    className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                    type="text" name="address" onChange={(e)=>setAddress(e.target.value) }
                  />
                </div>
                {/* Col */}
              </div>
              {/* End Grid */}
              {/* Grid */}
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Bill to:
                  </h3>
                  

                  <select name="customers" >
                    <option value="">Please choose a Customer</option>
                    <option value="">John</option>
                    <option value="">Smath</option>
                    <option value="">Wick</option>
                    <option value="">James</option>
                    <option value="">William</option>
                    <option value="">Brani</option>
                  </select>
                  <address className="mt-2 not-italic text-gray-500">
                    
                  </address>
                </div>
                {/* Col */}
                <div className="sm:text-left space-y-2">
                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    <dl className="grid sm:grid-cols-1 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                        Invoice date:
                      </dt>
                      <input
                        className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                        type="date"
                      />
                    </dl>
                    <dl className="grid sm:grid-cols-1 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                        Due date:
                      </dt>
                      <input
                        className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                        type="date"
                      />
                    </dl>
                  </div>
                  {/* End Grid */}
                </div>
                {/* Col */}
              </div>
              {/* End Grid */}
              {/* Table */}
              <div className="mt-6">
                <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                  <div className="hidden sm:grid sm:grid-cols-5">
                    <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                      Item
                    </div>
                    <div className="text-left text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </div>
                    <div className="text-left text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </div>
                    <div className="text-right text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </div>
                  </div>
                  <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700" />
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Item
                      </h5>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Design UX and UI
                      </p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </h5>
                      <p className="text-gray-800 dark:text-gray-200">1</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Rate
                      </h5>
                      <p className="text-gray-800 dark:text-gray-200">5</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </h5>
                      <p className="sm:text-right text-gray-800 dark:text-gray-200">
                        $500
                      </p>
                    </div>
                  </div>
                  <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Item
                      </h5>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Web project
                      </p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </h5>
                      <p className="text-gray-800 dark:text-gray-200">1</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Rate
                      </h5>
                      <p className="text-gray-800 dark:text-gray-200">24</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </h5>
                      <p className="sm:text-right text-gray-800 dark:text-gray-200">
                        $1250
                      </p>
                    </div>
                  </div>
                  <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Item
                      </h5>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        SEO
                      </p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </h5>
                      <p className="text-gray-800 dark:text-gray-200">1</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Rate
                      </h5>
                      <p className="text-gray-800 dark:text-gray-200">6</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </h5>
                      <p className="sm:text-right text-gray-800 dark:text-gray-200">
                        $2000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Table */}
              {/* Flex */}
              <div className="mt-8 flex sm:justify-end">
                <div className="w-full max-w-2xl sm:text-left space-y-2">
                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    <dl className="grid sm:grid-cols-2 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                        Subtotal:
                      </dt>
                      <input
                        className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                        type="number"
                      />
                    </dl>
                    <dl className="grid sm:grid-cols-2 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                        Total:
                      </dt>
                      <input
                        className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                        type="number"
                      />
                    </dl>
                    <dl className="grid sm:grid-cols-2 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                        Tax:
                      </dt>
                      <input
                        className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                        type="number"
                      />
                    </dl>
                    <dl className="grid sm:grid-cols-2 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                        Amount paid:
                      </dt>
                      <input
                        className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                        type="number"
                      />
                    </dl>
                    <dl className="grid sm:grid-cols-2 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                        Due balance:
                      </dt>
                      <input
                        className=" rounded-xl py-[8px] px-[15px]  outline-none  "
                        type="number"
                      />
                    </dl>
                  </div>
                  {/* End Grid */}
                </div>
              </div>
              {/* End Flex */}
              <div className="mt-8 sm:mt-12">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Thank you!
                </h4>
                <p className="text-gray-500">
                  If you have any questions concerning this invoice, use the
                  following contact information:
                </p>
                <div className="mt-2">
                  <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                    example@site.com
                  </p>
                  <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                    +1 (062) 109-9222
                  </p>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-x-3">
              <button onClick={handleAddDoc} className=" bg-blue-600 text-white py-[10px] px-[20px] rounded " >SAVE</button>
              
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Invoice */}
      </>
    </>
  );
};

export default NewInvoice;
