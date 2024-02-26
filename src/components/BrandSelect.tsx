import React from 'react'

function BrandSelect() {
    return (
        <>
            <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Brand
            </label>
            <select
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected={false} value="Samsung">
                    Samsung
                </option>
                <option selected={false} value="Fitbit">
                    Fitbit
                </option>
                <option selected={false} value="Amazon">
                    Amazon
                </option>
                <option selected={false} value="Anker">
                    Anker
                </option>
                <option selected={false} value="Sony">
                    Sony
                </option>
                <option selected={false} value="Logitech">
                    Logitech
                </option>
                <option selected={false} value="Razer">
                    Razer
                </option>
                <option selected={false} value="DJI">
                    DJI
                </option>
                <option selected={false} value="Oculus">
                    Oculus
                </option>
                <option selected={false} value="Apple">
                    Apple
                </option>
                <option selected={false} value="Google">
                    Google
                </option>
                <option selected={false} value="Tile">
                    Tile
                </option>
                <option selected={false} value="JBL">
                    JBL
                </option>
                <option selected={false} value="Kindle">
                    Kindle
                </option>
                <option selected={false} value="Pro">
                    Pro
                </option>
                <option selected={false} value="Philips">
                    Philips
                </option>
                <option selected={false} value="Belkin">
                    Belkin
                </option>
                <option selected={false} value="Roku">
                    Roku
                </option>
                <option selected={false} value="San">
                    San
                </option>
                <option selected={false} value="Bose">
                    Bose
                </option>
                <option selected={false} value="Garmin">
                    Garmin
                </option>
                <option selected={false} value="Nintendo">
                    Nintendo
                </option>
                <option selected={false} value="Ring">
                    Ring
                </option>
                <option selected={false} value="Ring">
                    Other/Unspecified
                </option>
            </select>
        </>
    )
}

export default BrandSelect
