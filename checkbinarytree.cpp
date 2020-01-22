    bool checkNode(Node *node, int min,int max){   
         
        if(node==NULL) return true;
        if(node->data<min || node->data>max)
            return false;
        return checkNode(node->left,min,node->data-1)&&checkNode(node->right,node->data+1,max);
    }

    bool checkBST(Node* root) {
        return checkNode(root,0,1000000);
    }
