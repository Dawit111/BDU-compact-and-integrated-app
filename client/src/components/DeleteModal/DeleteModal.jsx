import { Modal, useMantineTheme } from "@mantine/core";
import { deletePost } from "../../api/PostsRequests";


export default function DeleteModal({delModalOpened, setDelModalOpened, data, user}){
    const theme = useMantineTheme();
    const handleDelete = async () => {
        // window.alert("are you sure");
        const postId = data._id;
        const userId = user._id;
        await deletePost(postId, userId);
      };
    return (
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="18rem"
        opened={delModalOpened}
        onClose={() => setDelModalOpened(false)}
      >
  <form className="askForm">
  <h3>Are you sure to delete ?</h3>
        <div className="delYesOrNo">
         <button onClick={()=>handleDelete()} style={{padding:".3rem .7rem", borderRadius:".5rem", marginRight:"1rem", cursor:"pointer"}}>Yes</button>
         <button onClick={()=>setDelModalOpened(false)} style={{padding:".3rem .7rem", borderRadius:".5rem", cursor:"pointer"}}>cancel</button>
        </div>
  </form>
      </Modal>
    )
  }