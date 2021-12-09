export default function BranchHours(){
  return <table className="w-full">
              <caption className="text-left text-lg font-bold my-2">Branch Hours</caption>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Opens</th>
                  <th scope="col">Closes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>9:00am</td>
                  <td>8:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>9:00am</td>
                  <td>8:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>9:00am</td>
                  <td>8:30pm</td>
                </tr>
                <tr className="text-blue-900 bg-[#DEE5F0]">
                  <th scope="row">Thursday (Today)</th>
                  <td>9:00am</td>
                  <td>8:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Friday</th>
                  <td>9:00am</td>
                  <td>8:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>9:00am</td>
                  <td>5:00pm</td>
                </tr>
                <tr>
                  {/* <span aria-hidden="true">Sun</span> <span className="sr-only">Sunday</span> */}
                  <th scope="row">Sunday</th>
                  <td>1:30pm</td>
                  <td>5:00pm</td>
                </tr>
              </tbody>
            </table>
}