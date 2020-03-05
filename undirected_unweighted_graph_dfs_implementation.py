from collections import defaultdict
class graph:
    def __init__(self):
        self.graph = defaultdict(list)
        self.lyst = []
    def AddVertex(self,vertex1,vertex2):
        self.graph[vertex1].append(vertex2)
        self.graph[vertex2].append(vertex1)
        if vertex1 not in self.lyst: self.lyst.append(vertex1)
        if vertex2 not in self.lyst: self.lyst.append(vertex2)    
    def __str__(self):
        return str(self.graph)
    def DFSEdge(self,vertex1,vertex2):
        print(vertex1,end=' ')
        for i in self.graph[vertex1]:
            if i == vertex2:
                print(vertex2)
                return 
        else:
            return self.DFSEdge(i,vertex2)  
    def DFSUtil(self,vertex,visited):
        print(vertex,end=' ')
        visited[vertex] = True
        for i in self.graph[vertex]:
            if visited[i] == False:
                self.DFS(i,visited)
    def DFS(self,vertex,visited= {}):
        for i in self.lyst:
            if i not in self.graph.keys():
                self.graph[i] = []
        # print(self.graph)
        if visited == {}:
            for i in self.graph:
                visited[i] = False
        for i in self.graph:
            if visited[i] == False:
                self.DFSUtil(vertex,visited)            
g = graph()
g.AddVertex('A','B')
g.AddVertex('A','C')
g.AddVertex('C','B')
g.AddVertex('C','D')
g.AddVertex('D','A')
g.AddVertex('D','E')
g.AddVertex('B','E')

# print(g)
# g.DFSEdge('A','E')
g.DFS('C')