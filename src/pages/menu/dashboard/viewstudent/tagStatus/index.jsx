import { Tag } from "antd"

export const TagStatus = ({ result }) => {

    {
        if (result.status == 'approve') {
            return (
                <Tag color='#87d068' style={{ width: '80px', textAlign: 'center' }}>Approved</Tag>
            )
        } else if (result.status == 'reject') {
            return (
                <Tag color="#f50" style={{ width: '80px', textAlign: 'center' }}>Rejected</Tag>
            )
        } else if (result.status == 'shortlist') {
            return (
                <Tag color="#3b5999" style={{ width: '80px', textAlign: 'center' }}>ShortListed</Tag>
            )
        }
        else if (result.status == 'Interview') {
            return (
                <Tag color="grey" style={{ width: '80px', textAlign: 'center' }}>Interview</Tag>
            )
        } else {
            return (
                <Tag color='#f50' style={{ width: '80px', textAlign: 'center' }}>Waiting</Tag>
            )
        }
    }
}