// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: api/proto/v2/schema.proto

package protov2

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Player_Avatar_AvatarType int32

const (
	Player_Avatar_AVATAR_TYPE_UNSPECIFIED Player_Avatar_AvatarType = 0
	Player_Avatar_AVATAR_TYPE_DOG         Player_Avatar_AvatarType = 1
	Player_Avatar_AVATAR_TYPE_CAT         Player_Avatar_AvatarType = 2
)

// Enum value maps for Player_Avatar_AvatarType.
var (
	Player_Avatar_AvatarType_name = map[int32]string{
		0: "AVATAR_TYPE_UNSPECIFIED",
		1: "AVATAR_TYPE_DOG",
		2: "AVATAR_TYPE_CAT",
	}
	Player_Avatar_AvatarType_value = map[string]int32{
		"AVATAR_TYPE_UNSPECIFIED": 0,
		"AVATAR_TYPE_DOG":         1,
		"AVATAR_TYPE_CAT":         2,
	}
)

func (x Player_Avatar_AvatarType) Enum() *Player_Avatar_AvatarType {
	p := new(Player_Avatar_AvatarType)
	*p = x
	return p
}

func (x Player_Avatar_AvatarType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Player_Avatar_AvatarType) Descriptor() protoreflect.EnumDescriptor {
	return file_api_proto_v2_schema_proto_enumTypes[0].Descriptor()
}

func (Player_Avatar_AvatarType) Type() protoreflect.EnumType {
	return &file_api_proto_v2_schema_proto_enumTypes[0]
}

func (x Player_Avatar_AvatarType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Player_Avatar_AvatarType.Descriptor instead.
func (Player_Avatar_AvatarType) EnumDescriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{0, 0, 0}
}

type Room_RoomShape int32

const (
	Room_ROOM_SHAPE_UNSPECIFIED Room_RoomShape = 0
	Room_ROOM_SHAPE_5X5         Room_RoomShape = 1
)

// Enum value maps for Room_RoomShape.
var (
	Room_RoomShape_name = map[int32]string{
		0: "ROOM_SHAPE_UNSPECIFIED",
		1: "ROOM_SHAPE_5X5",
	}
	Room_RoomShape_value = map[string]int32{
		"ROOM_SHAPE_UNSPECIFIED": 0,
		"ROOM_SHAPE_5X5":         1,
	}
)

func (x Room_RoomShape) Enum() *Room_RoomShape {
	p := new(Room_RoomShape)
	*p = x
	return p
}

func (x Room_RoomShape) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Room_RoomShape) Descriptor() protoreflect.EnumDescriptor {
	return file_api_proto_v2_schema_proto_enumTypes[1].Descriptor()
}

func (Room_RoomShape) Type() protoreflect.EnumType {
	return &file_api_proto_v2_schema_proto_enumTypes[1]
}

func (x Room_RoomShape) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Room_RoomShape.Descriptor instead.
func (Room_RoomShape) EnumDescriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{2, 0}
}

type Game_GamePhase int32

const (
	Game_GAME_PHASE_UNSPECIFIED Game_GamePhase = 0
	Game_GAME_PHASE_THEME       Game_GamePhase = 1
	Game_GAME_PHASE_DRAW        Game_GamePhase = 2
	Game_GAME_PHASE_ANSWER      Game_GamePhase = 3
	Game_GAME_PHASE_RESULT      Game_GamePhase = 4
)

// Enum value maps for Game_GamePhase.
var (
	Game_GamePhase_name = map[int32]string{
		0: "GAME_PHASE_UNSPECIFIED",
		1: "GAME_PHASE_THEME",
		2: "GAME_PHASE_DRAW",
		3: "GAME_PHASE_ANSWER",
		4: "GAME_PHASE_RESULT",
	}
	Game_GamePhase_value = map[string]int32{
		"GAME_PHASE_UNSPECIFIED": 0,
		"GAME_PHASE_THEME":       1,
		"GAME_PHASE_DRAW":        2,
		"GAME_PHASE_ANSWER":      3,
		"GAME_PHASE_RESULT":      4,
	}
)

func (x Game_GamePhase) Enum() *Game_GamePhase {
	p := new(Game_GamePhase)
	*p = x
	return p
}

func (x Game_GamePhase) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Game_GamePhase) Descriptor() protoreflect.EnumDescriptor {
	return file_api_proto_v2_schema_proto_enumTypes[2].Descriptor()
}

func (Game_GamePhase) Type() protoreflect.EnumType {
	return &file_api_proto_v2_schema_proto_enumTypes[2]
}

func (x Game_GamePhase) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Game_GamePhase.Descriptor instead.
func (Game_GamePhase) EnumDescriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{3, 0}
}

type Player struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string         `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name   string         `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Avatar *Player_Avatar `protobuf:"bytes,3,opt,name=avatar,proto3" json:"avatar,omitempty"`
}

func (x *Player) Reset() {
	*x = Player{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_proto_v2_schema_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Player) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Player) ProtoMessage() {}

func (x *Player) ProtoReflect() protoreflect.Message {
	mi := &file_api_proto_v2_schema_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Player.ProtoReflect.Descriptor instead.
func (*Player) Descriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{0}
}

func (x *Player) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Player) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Player) GetAvatar() *Player_Avatar {
	if x != nil {
		return x.Avatar
	}
	return nil
}

type Reaction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id      string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Content string `protobuf:"bytes,2,opt,name=content,proto3" json:"content,omitempty"`
}

func (x *Reaction) Reset() {
	*x = Reaction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_proto_v2_schema_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Reaction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Reaction) ProtoMessage() {}

func (x *Reaction) ProtoReflect() protoreflect.Message {
	mi := &file_api_proto_v2_schema_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Reaction.ProtoReflect.Descriptor instead.
func (*Reaction) Descriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{1}
}

func (x *Reaction) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Reaction) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

type Room struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string               `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string               `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Capacity uint32               `protobuf:"varint,3,opt,name=capacity,proto3" json:"capacity,omitempty"`
	Shape    Room_RoomShape       `protobuf:"varint,4,opt,name=shape,proto3,enum=api.proto.v2.Room_RoomShape" json:"shape,omitempty"`
	Duration *durationpb.Duration `protobuf:"bytes,5,opt,name=duration,proto3" json:"duration,omitempty"`
	Players  []*Player            `protobuf:"bytes,6,rep,name=players,proto3" json:"players,omitempty"`
	Game     *Game                `protobuf:"bytes,8,opt,name=game,proto3" json:"game,omitempty"`
}

func (x *Room) Reset() {
	*x = Room{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_proto_v2_schema_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Room) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Room) ProtoMessage() {}

func (x *Room) ProtoReflect() protoreflect.Message {
	mi := &file_api_proto_v2_schema_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Room.ProtoReflect.Descriptor instead.
func (*Room) Descriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{2}
}

func (x *Room) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Room) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Room) GetCapacity() uint32 {
	if x != nil {
		return x.Capacity
	}
	return 0
}

func (x *Room) GetShape() Room_RoomShape {
	if x != nil {
		return x.Shape
	}
	return Room_ROOM_SHAPE_UNSPECIFIED
}

func (x *Room) GetDuration() *durationpb.Duration {
	if x != nil {
		return x.Duration
	}
	return nil
}

func (x *Room) GetPlayers() []*Player {
	if x != nil {
		return x.Players
	}
	return nil
}

func (x *Room) GetGame() *Game {
	if x != nil {
		return x.Game
	}
	return nil
}

type Game struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string         `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Phase  Game_GamePhase `protobuf:"varint,2,opt,name=phase,proto3,enum=api.proto.v2.Game_GamePhase" json:"phase,omitempty"`
	Themes []*Theme       `protobuf:"bytes,3,rep,name=themes,proto3" json:"themes,omitempty"`
}

func (x *Game) Reset() {
	*x = Game{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_proto_v2_schema_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Game) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Game) ProtoMessage() {}

func (x *Game) ProtoReflect() protoreflect.Message {
	mi := &file_api_proto_v2_schema_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Game.ProtoReflect.Descriptor instead.
func (*Game) Descriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{3}
}

func (x *Game) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Game) GetPhase() Game_GamePhase {
	if x != nil {
		return x.Phase
	}
	return Game_GAME_PHASE_UNSPECIFIED
}

func (x *Game) GetThemes() []*Theme {
	if x != nil {
		return x.Themes
	}
	return nil
}

type Theme struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Title  string `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Answer string `protobuf:"bytes,2,opt,name=answer,proto3" json:"answer,omitempty"`
}

func (x *Theme) Reset() {
	*x = Theme{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_proto_v2_schema_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Theme) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Theme) ProtoMessage() {}

func (x *Theme) ProtoReflect() protoreflect.Message {
	mi := &file_api_proto_v2_schema_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Theme.ProtoReflect.Descriptor instead.
func (*Theme) Descriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{4}
}

func (x *Theme) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Theme) GetAnswer() string {
	if x != nil {
		return x.Answer
	}
	return ""
}

type Player_Avatar struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type  Player_Avatar_AvatarType `protobuf:"varint,1,opt,name=type,proto3,enum=api.proto.v2.Player_Avatar_AvatarType" json:"type,omitempty"`
	Color string                   `protobuf:"bytes,2,opt,name=color,proto3" json:"color,omitempty"`
}

func (x *Player_Avatar) Reset() {
	*x = Player_Avatar{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_proto_v2_schema_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Player_Avatar) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Player_Avatar) ProtoMessage() {}

func (x *Player_Avatar) ProtoReflect() protoreflect.Message {
	mi := &file_api_proto_v2_schema_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Player_Avatar.ProtoReflect.Descriptor instead.
func (*Player_Avatar) Descriptor() ([]byte, []int) {
	return file_api_proto_v2_schema_proto_rawDescGZIP(), []int{0, 0}
}

func (x *Player_Avatar) GetType() Player_Avatar_AvatarType {
	if x != nil {
		return x.Type
	}
	return Player_Avatar_AVATAR_TYPE_UNSPECIFIED
}

func (x *Player_Avatar) GetColor() string {
	if x != nil {
		return x.Color
	}
	return ""
}

var File_api_proto_v2_schema_proto protoreflect.FileDescriptor

var file_api_proto_v2_schema_proto_rawDesc = []byte{
	0x0a, 0x19, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x76, 0x32, 0x2f, 0x73,
	0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x61, 0x70, 0x69,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x32, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x93, 0x02, 0x0a, 0x06, 0x50, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x33, 0x0a, 0x06, 0x61, 0x76, 0x61, 0x74,
	0x61, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x32, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x41,
	0x76, 0x61, 0x74, 0x61, 0x72, 0x52, 0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x1a, 0xaf, 0x01,
	0x0a, 0x06, 0x41, 0x76, 0x61, 0x74, 0x61, 0x72, 0x12, 0x3a, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x76, 0x32, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x41, 0x76, 0x61,
	0x74, 0x61, 0x72, 0x2e, 0x41, 0x76, 0x61, 0x74, 0x61, 0x72, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x22, 0x53, 0x0a, 0x0a, 0x41, 0x76,
	0x61, 0x74, 0x61, 0x72, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x17, 0x41, 0x56, 0x41, 0x54,
	0x41, 0x52, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46,
	0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x13, 0x0a, 0x0f, 0x41, 0x56, 0x41, 0x54, 0x41, 0x52, 0x5f,
	0x54, 0x59, 0x50, 0x45, 0x5f, 0x44, 0x4f, 0x47, 0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f, 0x41, 0x56,
	0x41, 0x54, 0x41, 0x52, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x43, 0x41, 0x54, 0x10, 0x02, 0x22,
	0x34, 0x0a, 0x08, 0x52, 0x65, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x63,
	0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f,
	0x6e, 0x74, 0x65, 0x6e, 0x74, 0x22, 0xc6, 0x02, 0x0a, 0x04, 0x52, 0x6f, 0x6f, 0x6d, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x61, 0x70, 0x61, 0x63, 0x69, 0x74, 0x79, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x08, 0x63, 0x61, 0x70, 0x61, 0x63, 0x69, 0x74, 0x79, 0x12, 0x32,
	0x0a, 0x05, 0x73, 0x68, 0x61, 0x70, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1c, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x6f, 0x6f,
	0x6d, 0x2e, 0x52, 0x6f, 0x6f, 0x6d, 0x53, 0x68, 0x61, 0x70, 0x65, 0x52, 0x05, 0x73, 0x68, 0x61,
	0x70, 0x65, 0x12, 0x35, 0x0a, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2e, 0x0a, 0x07, 0x70, 0x6c, 0x61,
	0x79, 0x65, 0x72, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x32, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x52, 0x07, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x12, 0x26, 0x0a, 0x04, 0x67, 0x61, 0x6d,
	0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x04, 0x67, 0x61, 0x6d,
	0x65, 0x22, 0x3b, 0x0a, 0x09, 0x52, 0x6f, 0x6f, 0x6d, 0x53, 0x68, 0x61, 0x70, 0x65, 0x12, 0x1a,
	0x0a, 0x16, 0x52, 0x4f, 0x4f, 0x4d, 0x5f, 0x53, 0x48, 0x41, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x12, 0x0a, 0x0e, 0x52, 0x4f,
	0x4f, 0x4d, 0x5f, 0x53, 0x48, 0x41, 0x50, 0x45, 0x5f, 0x35, 0x58, 0x35, 0x10, 0x01, 0x22, 0xfa,
	0x01, 0x0a, 0x04, 0x47, 0x61, 0x6d, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x32, 0x0a, 0x05, 0x70, 0x68, 0x61, 0x73, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x50,
	0x68, 0x61, 0x73, 0x65, 0x52, 0x05, 0x70, 0x68, 0x61, 0x73, 0x65, 0x12, 0x2b, 0x0a, 0x06, 0x74,
	0x68, 0x65, 0x6d, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x32, 0x2e, 0x54, 0x68, 0x65, 0x6d, 0x65,
	0x52, 0x06, 0x74, 0x68, 0x65, 0x6d, 0x65, 0x73, 0x22, 0x80, 0x01, 0x0a, 0x09, 0x47, 0x61, 0x6d,
	0x65, 0x50, 0x68, 0x61, 0x73, 0x65, 0x12, 0x1a, 0x0a, 0x16, 0x47, 0x41, 0x4d, 0x45, 0x5f, 0x50,
	0x48, 0x41, 0x53, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44,
	0x10, 0x00, 0x12, 0x14, 0x0a, 0x10, 0x47, 0x41, 0x4d, 0x45, 0x5f, 0x50, 0x48, 0x41, 0x53, 0x45,
	0x5f, 0x54, 0x48, 0x45, 0x4d, 0x45, 0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f, 0x47, 0x41, 0x4d, 0x45,
	0x5f, 0x50, 0x48, 0x41, 0x53, 0x45, 0x5f, 0x44, 0x52, 0x41, 0x57, 0x10, 0x02, 0x12, 0x15, 0x0a,
	0x11, 0x47, 0x41, 0x4d, 0x45, 0x5f, 0x50, 0x48, 0x41, 0x53, 0x45, 0x5f, 0x41, 0x4e, 0x53, 0x57,
	0x45, 0x52, 0x10, 0x03, 0x12, 0x15, 0x0a, 0x11, 0x47, 0x41, 0x4d, 0x45, 0x5f, 0x50, 0x48, 0x41,
	0x53, 0x45, 0x5f, 0x52, 0x45, 0x53, 0x55, 0x4c, 0x54, 0x10, 0x04, 0x22, 0x35, 0x0a, 0x05, 0x54,
	0x68, 0x65, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x6e,
	0x73, 0x77, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x6e, 0x73, 0x77,
	0x65, 0x72, 0x42, 0xb5, 0x01, 0x0a, 0x10, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x76, 0x32, 0x42, 0x0b, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x42, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x32, 0x31, 0x68, 0x61, 0x63, 0x6b, 0x30, 0x32, 0x77, 0x69, 0x6e, 0x2f, 0x6e,
	0x61, 0x73, 0x63, 0x61, 0x6c, 0x61, 0x79, 0x2d, 0x76, 0x32, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x62,
	0x75, 0x66, 0x67, 0x65, 0x6e, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x76, 0x32, 0x3b, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x76, 0x32, 0xa2, 0x02, 0x03, 0x41, 0x50, 0x58,
	0xaa, 0x02, 0x0c, 0x41, 0x70, 0x69, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x56, 0x32, 0xca,
	0x02, 0x0c, 0x41, 0x70, 0x69, 0x5c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x5c, 0x56, 0x32, 0xe2, 0x02,
	0x18, 0x41, 0x70, 0x69, 0x5c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x5c, 0x56, 0x32, 0x5c, 0x47, 0x50,
	0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0e, 0x41, 0x70, 0x69, 0x3a,
	0x3a, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x3a, 0x3a, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_api_proto_v2_schema_proto_rawDescOnce sync.Once
	file_api_proto_v2_schema_proto_rawDescData = file_api_proto_v2_schema_proto_rawDesc
)

func file_api_proto_v2_schema_proto_rawDescGZIP() []byte {
	file_api_proto_v2_schema_proto_rawDescOnce.Do(func() {
		file_api_proto_v2_schema_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_proto_v2_schema_proto_rawDescData)
	})
	return file_api_proto_v2_schema_proto_rawDescData
}

var file_api_proto_v2_schema_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_api_proto_v2_schema_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_api_proto_v2_schema_proto_goTypes = []interface{}{
	(Player_Avatar_AvatarType)(0), // 0: api.proto.v2.Player.Avatar.AvatarType
	(Room_RoomShape)(0),           // 1: api.proto.v2.Room.RoomShape
	(Game_GamePhase)(0),           // 2: api.proto.v2.Game.GamePhase
	(*Player)(nil),                // 3: api.proto.v2.Player
	(*Reaction)(nil),              // 4: api.proto.v2.Reaction
	(*Room)(nil),                  // 5: api.proto.v2.Room
	(*Game)(nil),                  // 6: api.proto.v2.Game
	(*Theme)(nil),                 // 7: api.proto.v2.Theme
	(*Player_Avatar)(nil),         // 8: api.proto.v2.Player.Avatar
	(*durationpb.Duration)(nil),   // 9: google.protobuf.Duration
}
var file_api_proto_v2_schema_proto_depIdxs = []int32{
	8, // 0: api.proto.v2.Player.avatar:type_name -> api.proto.v2.Player.Avatar
	1, // 1: api.proto.v2.Room.shape:type_name -> api.proto.v2.Room.RoomShape
	9, // 2: api.proto.v2.Room.duration:type_name -> google.protobuf.Duration
	3, // 3: api.proto.v2.Room.players:type_name -> api.proto.v2.Player
	6, // 4: api.proto.v2.Room.game:type_name -> api.proto.v2.Game
	2, // 5: api.proto.v2.Game.phase:type_name -> api.proto.v2.Game.GamePhase
	7, // 6: api.proto.v2.Game.themes:type_name -> api.proto.v2.Theme
	0, // 7: api.proto.v2.Player.Avatar.type:type_name -> api.proto.v2.Player.Avatar.AvatarType
	8, // [8:8] is the sub-list for method output_type
	8, // [8:8] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_api_proto_v2_schema_proto_init() }
func file_api_proto_v2_schema_proto_init() {
	if File_api_proto_v2_schema_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_proto_v2_schema_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Player); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_proto_v2_schema_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Reaction); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_proto_v2_schema_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Room); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_proto_v2_schema_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Game); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_proto_v2_schema_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Theme); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_proto_v2_schema_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Player_Avatar); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_proto_v2_schema_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_proto_v2_schema_proto_goTypes,
		DependencyIndexes: file_api_proto_v2_schema_proto_depIdxs,
		EnumInfos:         file_api_proto_v2_schema_proto_enumTypes,
		MessageInfos:      file_api_proto_v2_schema_proto_msgTypes,
	}.Build()
	File_api_proto_v2_schema_proto = out.File
	file_api_proto_v2_schema_proto_rawDesc = nil
	file_api_proto_v2_schema_proto_goTypes = nil
	file_api_proto_v2_schema_proto_depIdxs = nil
}
