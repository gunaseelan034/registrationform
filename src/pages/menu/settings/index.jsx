import { SettingFilled } from "@ant-design/icons"
import {
    Layout,
    Card,
    Select,
    Form,
    Row,
    Col,
    Button
} from "antd";
import { useContext } from "react";
import { PageHeaders } from "../../layout/components/pageheader/pageheader"
import { AppContext } from '../../../providers/context/index'
import { saveToStorage } from "../../../utils/sessionstorage";
const { Content } = Layout;

const languageOption = [
    {
        label: 'English',
        value: 'en-us'
    },
    {
        label: 'French',
        value: 'fr-ca'
    },
    {
        label: 'German',
        value: 'de-de'
    }
]

export const Settings = () => {
    const [form] = Form.useForm();
    const { state, dispatch } = useContext(AppContext);

    const Ok = () => {
        console.log(state);
        form.validateFields().then((values) => {
            let siteLang = values.language;
            dispatch({ type: 'setLang', siteLang });
            saveToStorage('siteLang', values);
        })
    }

    return (
        <div>
            <PageHeaders
                title={"Settings"}
                icon={<SettingFilled />}
            />
            <Content
                style={{
                    margin: "12px 16px",
                    padding: 24,
                    margin: "24px 16px 0",
                    overflow: "initial",
                }}
            >
                <Card title={translate("hello", {name: state.name})}>
                    <Row>
                        <Col span={6}>
                            <Form form={form}>
                                <Form.Item name='language'>
                                    <Select
                                        style={{ minWidth: '200px' }}
                                        placeholder="Choose Language"
                                        options={languageOption}
                                    />
                                </Form.Item>
                            </Form>
                            <Button onClick={Ok}>save</Button>
                        </Col>
                    </Row>
                </Card>
            </Content>
        </div>
    )
}
