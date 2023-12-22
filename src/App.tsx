import { useState } from "react";
import {
  Avatar,
  Skeleton,
  Breadcrumb,
  Button,
  Card,
  Center,
  Checkbox,
  ClickPopover,
  Col,
  ColDivider,
  Drawer,
  Empty,
  Grid,
  HoverPopover,
  IconButton,
  Input,
  ListItem,
  Modal,
  Overlay,
  Radio,
  Row,
  RowDivider,
  Spin,
  SubTitle,
  Switch,
  Tabs,
  Tag,
  Textarea,
  Title,
  Tooltip,
  Uploader,
  TabItem,
} from "./components";
import { User } from "lucide-react";

export const App = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [OverlayVisible, setOverlayVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Center className="gap-12 bg-white p-8">
      {/* basic */}
      <Title>Avatar</Title>
      <Row className="gap-4">
        <Avatar src="https://avatars.githubusercontent.com/u/6154722" />
        <Avatar name="Tommy" />
      </Row>

      <Title>Skeleton</Title>
      <Row className="gap-4">
        <Skeleton className="h-16 w-60 rounded-lg" />
        <Skeleton className="h-16 w-32" />
        <Skeleton className="h-16 w-16" />
      </Row>

      <Title>Breadcrumb</Title>
      <Breadcrumb
        items={[
          { title: "item1", href: "/" },
          { title: "item2", href: "/" },
          { title: "item3", href: "/" },
        ]}
      />

      <Title>Button</Title>
      <Row className="gap-4">
        <Button>button</Button>
        <Button variant="primary">button</Button>
      </Row>

      <Title>IconButton</Title>
      <IconButton>
        <User />
      </IconButton>

      <Title>Card</Title>
      <Card className="p-8 shadow-sm">
        <Center className="w-60">card</Center>
      </Card>

      <Title>RowDivider</Title>
      <RowDivider className="w-80" />

      <Title>ColDivider</Title>
      <ColDivider className="h-20" />

      <Title>Empty</Title>
      <Empty />

      <Title>List</Title>
      <Card className="w-40 p-2 shadow-sm">
        <ListItem>item1</ListItem>
        <ListItem>item2</ListItem>
        <ListItem>item3</ListItem>
      </Card>

      <Title>Spin</Title>
      <Spin />

      <Title>Tabs</Title>
      <Tabs>
        {["Tab1", "Tab2", "Tab3"].map((item, index) => {
          return (
            <TabItem
              key={index}
              active={index === activeTab}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {item}
            </TabItem>
          );
        })}
      </Tabs>

      <Title>Tag</Title>
      <Row className="gap-4">
        <Tag>Tag</Tag>
        <Tag active>Tag</Tag>
      </Row>

      <Title>Uploader</Title>
      <Uploader onUpload={async () => {}}>
        <Button>upload</Button>
      </Uploader>

      <Title>Input</Title>
      <Input placeholder="please enter your name" className="w-80" />

      <Title>Textarea</Title>
      <Textarea placeholder="please enter your feedback" className="w-80" />

      <Title>Radio</Title>
      <Radio />

      <Title>Checkbox</Title>
      <Checkbox />

      <Title>Switch</Title>
      <Switch checked={switchChecked} onChange={setSwitchChecked} />

      <Title>Row</Title>
      <Card className="w-80 p-2 shadow-sm">
        <Row className="gap-2">
          <Button>item1</Button>
          <Button>item2</Button>
        </Row>
      </Card>

      <Title>Col</Title>
      <Card className="w-80 p-2 shadow-sm">
        <Col className="gap-2">
          <Button>item1</Button>
          <Button>item2</Button>
        </Col>
      </Card>

      <Title>Center</Title>
      <Card className="w-80 p-2 shadow-sm">
        <Center className="gap-2">
          <Button>item1</Button>
          <Button>item2</Button>
        </Center>
      </Card>

      <Title>Grid</Title>
      <Card className="w-80 p-2 shadow-sm">
        <Grid className="grid-cols-3 gap-2">
          <Button>item1</Button>
          <Button>item2</Button>
          <Button>item3</Button>
          <Button>item4</Button>
          <Button>item5</Button>
          <Button>item6</Button>
        </Grid>
      </Card>

      <Title>ClickPopover</Title>
      <ClickPopover
        render={(tp) => (
          <Card className="p-2 shadow-sm">
            <Center className="h-40 w-40">
              <Button
                onClick={() => {
                  tp.hide();
                }}
              >
                close
              </Button>
            </Center>
          </Card>
        )}
      >
        <Button>click me</Button>
      </ClickPopover>

      <Title>HoverPopover</Title>
      <HoverPopover
        render={(tp) => (
          <Card className="p-2 shadow-sm">
            <Center className="h-40 w-40">
              <Button
                onClick={() => {
                  tp.hide();
                }}
              >
                close
              </Button>
            </Center>
          </Card>
        )}
      >
        <Button>hover me</Button>
      </HoverPopover>

      <Title>Dropdown</Title>
      <ClickPopover
        render={() => (
          <Card className="w-40 p-2 shadow-sm">
            <ListItem>item1</ListItem>
            <ListItem>item2</ListItem>
            <ListItem>item3</ListItem>
          </Card>
        )}
      >
        <Button>click me</Button>
      </ClickPopover>

      <Title>Tooltip</Title>
      <Tooltip content="content">
        <Button>hover me</Button>
      </Tooltip>

      <Title>Modal</Title>
      <Button
        onClick={() => {
          setModalVisible(true);
        }}
      >
        open Modal
      </Button>
      <Modal
        visible={modalVisible}
        onHide={() => {
          setModalVisible(false);
        }}
      >
        <Center className="h-60 w-80">
          <Button
            onClick={() => {
              setModalVisible(false);
            }}
          >
            close
          </Button>
        </Center>
      </Modal>

      <Title>Drawer</Title>
      <Button
        onClick={() => {
          setDrawerVisible(true);
        }}
      >
        open Drawer
      </Button>
      <Drawer
        visible={drawerVisible}
        onHide={() => {
          setDrawerVisible(false);
        }}
      >
        <Center className="h-60">
          <Button
            onClick={() => {
              setDrawerVisible(false);
            }}
          >
            close
          </Button>
        </Center>
      </Drawer>

      <Title>Overlay</Title>
      <Button
        onClick={() => {
          setOverlayVisible(true);
        }}
      >
        open Overlay
      </Button>
      {OverlayVisible && (
        <Overlay>
          <Button
            onClick={() => {
              setOverlayVisible(false);
            }}
          >
            close
          </Button>
        </Overlay>
      )}

      {/* text */}
      <Title>Title</Title>
      <Title>title</Title>

      <Title>SubTitle</Title>
      <SubTitle>subTitle</SubTitle>
    </Center>
  );
};
