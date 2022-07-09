import { Tag } from "antd"

export const TagStatus = ({result}) => {

      {
        if(result.status == 'approve') {
            return (
                <Tag color='green'>Approved</Tag>
            )
        } else if (result.status == 'reject') {
            return (
                <Tag color='red'>Rejected</Tag>
            )
        } else if (result.status == 'shortlist') {
            return (
                <Tag color='yellow'>ShortListed</Tag>
            )
        } else {
            return (
                <Tag color='default'>Waiting</Tag>
            )
        }
      }
}