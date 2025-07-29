import os

if __name__ == '__main__':
    print("Pushing all images...")
    os.system("docker push pointeldevs/stk_base")
    os.system("docker push pointeldevs/stk_data")
    os.system("docker push pointeldevs/stk_java")
    os.system("docker push pointeldevs/stk_node")
    os.system("docker push pointeldevs/run_base")
    os.system("docker push pointeldevs/run_data")
    os.system("docker push pointeldevs/run_java")
    os.system("docker push pointeldevs/run_node")
