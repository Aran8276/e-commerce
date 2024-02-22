import React from 'react'

function BrandSelect() {
    return (
        <>
            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Brand</label>
            <select id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="Samsung">Samsung</option>
                <option value="Fitbit">Fitbit</option>
                <option value="Amazon">Amazon</option>
                <option value="Anker">Anker</option>
                <option value="Sony">Sony</option>
                <option value="Logitech">Logitech</option>
                <option value="Razer">Razer</option>
                <option value="DJI">DJI</option>
                <option value="Oculus">Oculus</option>
                <option value="Apple">Apple</option>
                <option value="Google">Google</option>
                <option value="Tile">Tile</option>
                <option value="JBL">JBL</option>
                <option value="Kindle">Kindle</option>
                <option value="Pro">Pro</option>
                <option value="Philips">Philips</option>
                <option value="Belkin">Belkin</option>
                <option value="Roku">Roku</option>
                <option value="San">San</option>
                <option value="Bose">Bose</option>
                <option value="Garmin">Garmin</option>
                <option value="Nintendo">Nintendo</option>
                <option value="Ring">Ring</option>
                <option value="Ring">Other/Unspecified</option>
            </select>
        </>
    )
}

export default BrandSelect

