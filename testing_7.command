#!/usr/local/bin/python3
from collections import defaultdict

class Graph: 
  
    def __init__(self): 
        self.graph = defaultdict(list)
        self.edges = {}
        self.vertices = []
        self.prev_vertex = {}

    def add_edge(self,u,v,weight=1):

        self.graph[u].append(v)
        self.graph[v].append(u)

        if u not in self.vertices: self.vertices.append(u)
        if v not in self.vertices: self.vertices.append(v)

        self.edges[(u,v)] = weight
        self.edges[(v,u)] = weight
    
    def isConnected(self,u,v):
        vertex_visited = {}
        for i in self.graph:
            vertex_visited[i] = False

        queue = []
        queue.append(u)
        connected_vertices = set()

        while queue:
            temp = queue.pop(0)
            connected_vertices.add(temp)
            vertex_visited[temp] = True
            for i in self.graph[temp]:
                if vertex_visited[i] == False:
                    queue.append(i)
            
        if u in connected_vertices and v in connected_vertices: return True
        return False
    # def temp(self,temp,vertex_visited):
    #     temp = self.prev_vertex[temp]
    #     if vertex_visited[temp] == False: return temp
    #     else: return self.temp(temp,vertex_visited)
    def dijkstra(self, node): 
        dist = {}
        vertex_visited = {}

        for i in self.graph:
            if i == node: dist[(node,i)] = 0
            else: dist[(node,i)] = 10**9

        for i in self.graph:
            vertex_visited[i] = False

        temp = node

        while vertex_visited[temp] == False:
            vertex_visited[temp] = True
            for i in self.graph[temp]:
                if vertex_visited[i] == False and dist[(node,i)]>self.edges[(temp,i)]+dist[(node,temp)]:
                    dist[(node,i)] = self.edges[(temp,i)] + dist[(node,temp)]
                    self.prev_vertex[i] = temp
                    
            temp_dict = {}
            for i in self.graph[temp]:      
                temp_dict[i] = dist[(node,i)]
            temp_dict = sorted(temp_dict.items(),key=lambda kv: (kv[1],kv[0]))
            for i in range(len(temp_dict)):
                if vertex_visited[temp_dict[i][0]] == False: 
                    temp = temp_dict[i][0]
                    break
            else: 
                if vertex_visited[self.prev_vertex[temp]] == False: 
                    temp = self.prev_vertex[temp]
                else:
                    min_dist = 10**9
                    for i in self.graph:
                        if vertex_visited[i] == False and dist[(node,i)] < min_dist:
                            temp = i
                            break
        return self.prev_vertex

    def src_to_dest(self,u,v):
        
        if self.isConnected(u,v):

            prev_vertex = self.dijkstra(u)
            prev_vertex = list(prev_vertex.items())
            
            size = len(prev_vertex)
            src_to_dest = []
            temp = v

            while temp:
                src_to_dest.insert(0,temp)
                if temp == u: break
                for i in range(size):
                    if prev_vertex[i][0] == temp: 
                        temp = prev_vertex[i][1]

            src_to_dest = set(src_to_dest)
                        
            return src_to_dest

        return -1
     
# ----------------------------------------------DRIVER CODE----------------------------------------------
g = Graph()

# input_matrix = []
# order = int(input('order: '))
# for i in range(order):
#     input_matrix.append(list(map(int, input().rstrip().split())))
# size = len(input_matrix)
# for i in range(size):
#     for j in range(size):
#         if j-1>=0 and input_matrix[i][j-1] == 1 and input_matrix[i][j] == 1: 
#             g.add_edge((i,j-1),(i,j))
#         if i-1>=0 and input_matrix[i-1][j] == 1 and input_matrix[i][j] == 1: 
#             g.add_edge((i-1,j),(i,j))

# u = tuple(map(int,input().rstrip().split()))
# v = tuple(map(int,input().rstrip().split()))
# temp_list = g.src_to_dest(u,v)
# if type(temp_list) is set:
#     for i in range(order):
#         for j in range(order):
#             if (i,j) in temp_list: print(1, end=' ')
#             else: print(0,end=' ')
#         print()
# else: print(temp_list)
# print

input_file = open("inputfile.txt","w")
input_file.write(input())
input_file.close()

input_file = open("inputfile.txt","r")
order = input_file.readline()
input_file.close()

input_file = open("inputfile.txt","a")
input_file.write('\n')
for i in range(int(order)):
    input_file.write(input())
    input_file.write('\n')

input_file.write(input())
input_file.write('\n')
input_file.write(input())
input_file.close()

input_file = open("inputfile.txt","r")
input_matrix = []
order = int(order)
for i in range(order+1):
    line = input_file.readline()
    if i > 0: input_matrix.append(list(map(int, line.rstrip().split())))
input_file.close()
# print(input_matrix)
for i in range(len(input_matrix)):
    for j in range(len(input_matrix)):
        if j-1>=0 and input_matrix[i][j-1] == 1 and input_matrix[i][j] == 1: 
            g.add_edge((i,j-1),(i,j))
        if i-1>=0 and input_matrix[i-1][j] == 1 and input_matrix[i][j] == 1: 
            g.add_edge((i-1,j),(i,j))

input_file = open("inputfile.txt","r")
num_lines = 0
lines = input_file.readlines()

for i in lines:
    num_lines += 1
input_file.close()
# print(num_lines)
input_file = open("inputfile.txt","r")
for i in range(num_lines):
    line = input_file.readline()
    if i == num_lines-2: 
        
        u = tuple(map(int,line.rstrip().split()))
    if i == num_lines-1: 
        
        v = tuple(map(int,line.rstrip().split())) 
input_file.close()  
# print(u)
# print(v)        
temp_list = g.src_to_dest(u,v)
# print(temp_list)
output_file = open("outputfile.txt","w")
output_list = [[str(0) for i in range(order)] for j in range(order)]
if type(temp_list) is set:
    for i in range(order):
        for j in range(order):
            if (i,j) in temp_list: output_list[i][j] = str(1)
    # print(output_list)
    for i in output_list:
        s = " ".join(i)
        # print(s)
        output_file.write(s)
        output_file.write("\n")
    output_file.close()
        
else: 
    output_file.write(str(temp_list))
    output_file.close()