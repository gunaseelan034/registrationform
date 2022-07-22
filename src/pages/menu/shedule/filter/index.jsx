import { Form, Modal } from "antd"
import Calendar from "react-calendar"


export const FilterInterView = ({ visible, closeModal }) => {
    const [form] = Form.useForm();

    return (
        <Modal title='Filter Data' visible={visible} onCancel={closeModal}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form form={form}>
                    <Form.Item name='interview_date' rules={[{ required: true, message: 'Please input your Date!' }]}>
                        <Calendar
                            calendarType='ISO 8601'
                            showNavigation
                        />
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}