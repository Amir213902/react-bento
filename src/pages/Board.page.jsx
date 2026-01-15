import MyGrid from '../components/MyGrid'
import MyResponsiveGrid from '../components/MyResponsiveGrid'
import Device from 'device.js'

const deviceInfo = new Device()

function BoardPage() {

    return (
        deviceInfo.desktop ? (
            <MyGrid />
        ) : (
            <MyResponsiveGrid />
        )
    )
}

export default BoardPage
